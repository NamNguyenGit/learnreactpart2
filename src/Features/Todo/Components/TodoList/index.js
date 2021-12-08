import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList(props) {
  const { todoList } = props;
  return (
    <ul>
      {todoList.map((todoItem) => {
        return (
          <li style={{ listStyle: "none" }} key={todoItem.id}>
            {todoItem.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
