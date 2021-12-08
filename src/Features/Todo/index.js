import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import TodoList from "./Components/TodoList";

const TodoFeatures = (props) => {
  const todoList = [
    {
      id: 1,
      title: "Sleep",
    },
    {
      id: 2,
      title: "Eat",
    },
    {
      id: 3,
      title: "Break",
    },
  ];
  return (
    <Fragment>
      <h1>List To Do</h1>
      <TodoList todoList={todoList}></TodoList>
    </Fragment>
  );
};
TodoFeatures.propTypes = {};

export default TodoFeatures;
