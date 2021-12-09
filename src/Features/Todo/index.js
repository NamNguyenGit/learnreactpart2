import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import TodoList from "./Components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

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

  const [todoList, settodoList] = useState(datatodoList);
  return (
    <Fragment>
      <h1>List To Do</h1>
      <TodoList onTodoClick={handleTodoClick} todoList={todoList}></TodoList>
      <div>
        <Button style={{ margin: 5 }} color="warning">
          Show all
        </Button>
        <Button style={{ margin: 5 }} color="warning">
          Show completed
        </Button>
        <Button style={{ margin: 5 }} color="warning">
          Show new
        </Button>
      </div>
    </Fragment>
  );
};
TodoFeatures.propTypes = {};

export default TodoFeatures;
