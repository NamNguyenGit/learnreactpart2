import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import '../../style.scss';
import TodoList from '../../Components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import TodoForm from '../../Components/TodoForm';
const queryString = require('query-string');

const ListPage = (props) => {
  const datatodoList = [
    {
      id: 1,
      title: 'Sleep',
      status: 'new',
    },
    {
      id: 2,
      title: 'Eat',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Break',
      status: 'new',
    },
  ];

  //lay query params
  const location = useLocation();

  //
  const history = useHistory();
  const match = useRouteMatch();
  //state
  const [todoList, settodoList] = useState(datatodoList);
  const [filterstatus, setfilterstatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  //update list theo locaiton
  useEffect(() => {
    const params = queryString.parse(location.search);
    setfilterstatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todoItem, idx) => {
    //clone array to the new one
    const newTodoList = [...todoList];

    //toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    newTodoList[idx] = newTodo;

    //update todo list
    settodoList(newTodoList);
  };

  const handleshowall = () => {
    // setfilterstatus("all");

    const queryParam = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleshowdone = () => {
    // setfilterstatus("completed");
    const queryParam = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleshownew = () => {
    // setfilterstatus("new");
    const queryParam = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  const newrenderTodolist = useMemo(() => {
    return todoList.filter(
      (todoItem) => filterstatus === 'all' || filterstatus === todoItem.status
    );
  }, [todoList, filterstatus]);

  const handleTodoFormSubmit = (values) => {
    console.log('Form submit: ', values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };
    const newTodoList = [...todoList, newTodo];
    settodoList(newTodoList);
  };

  return (
    <Fragment>
      <h3>What to to</h3>
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <h1>List To Do</h1>
      <TodoList onTodoClick={handleTodoClick} todoList={newrenderTodolist}></TodoList>
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
ListPage.propTypes = {};

export default ListPage;
