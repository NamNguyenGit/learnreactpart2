import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todolist: PropTypes.array,
};

TodoList.defaultProps = {
  todolist: [],
};

function TodoList(todolist) {
  return (
    <ul>
      {todolist.map((todoItem) => {
        return <li key={todoItem.id}>{todoItem.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
