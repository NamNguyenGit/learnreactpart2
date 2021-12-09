import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import TodoList from "./Components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import "./style.scss";

const TodoFeatures = (props) => {
  const datatodoList = [
    {
      id: 1,
      title: "Sleep",
      status: "new",
    },
    {
      id: 2,
      title: "Eat",
      status: "completed",
    },
    {
      id: 3,
      title: "Break",
      status: "new",
    },
  ];

  //state
  const [todoList, settodoList] = useState(datatodoList);
  const [filterstatus, setfilterstatus] = useState("all");

  const handleTodoClick = (todoItem, idx) => {
    //clone array to the new one
    const newTodoList = [...todoList];

    //toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    newTodoList[idx] = newTodo;

    //update todo list
    settodoList(newTodoList);
  };

  const handleshowall = () => {
    setfilterstatus("all");
  };
  const handleshowdone = () => {
    setfilterstatus("completed");
  };
  const handleshownew = () => {
    setfilterstatus("new");
  };

  const newrenderTodolist = todoList.filter(
    (todoItem) => filterstatus === "all" || filterstatus === todoItem.status
  );
  console.log(newrenderTodolist);

  return (
    <Fragment>
      <h1>List To Do</h1>
      <TodoList
        onTodoClick={handleTodoClick}
        todoList={newrenderTodolist}
      ></TodoList>
      <div>
        <Button onClick={handleshowall} className="btn-click" color="success">
          Show all
        </Button>
        <Button onClick={handleshowdone} className="btn-click" color="warning">
          Show completed
        </Button>
        <Button onClick={handleshownew} className="btn-click" color="danger">
          Show new
        </Button>
      </div>
    </Fragment>
  );
};
TodoFeatures.propTypes = {};

export default TodoFeatures;
