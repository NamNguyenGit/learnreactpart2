import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoCLick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todoItem, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todoItem, idx);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todoItem, idx) => {
        return (
          <li
            className={classnames({
              'todo-item': true,
              completed: todoItem.status === 'completed',
            })}
            key={todoItem.id}
            onClick={() => handleTodoClick(todoItem, idx)}
          >
            {todoItem.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
