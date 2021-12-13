import React from "react";

import { Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./style.scss";
import { Route, Switch } from "react-router-dom";
import ListPage from "./Pages/ListPages";
import ProductFeatures from "../Product";
import DetailPage from "./Pages/DetailPages";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const TodoFeature = (props) => {
  const match = useRouteMatch();

  return (
    <Fragment>
      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route path={`${match.path}/:todoId`} component={DetailPage}></Route>
        <Route path="/products" component={ProductFeatures}></Route>
      </Switch>
    </Fragment>
  );
};
TodoFeature.propTypes = {};

export default TodoFeature;
