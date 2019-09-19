import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Departments from "./components/Departments";
import DepartmentForm from "./components/DepartmentForm";
import DepartmentView from "./components/DepartmentView";
import NoMatch from "./components/NoMatch";
import {Container} from "semantic-ui-react";
import {Route, Switch} from "react-router-dom";



const App = () => {
  return (
    <>
      <Navbar/>
      <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/departments" component={Departments}/>
          <Route exact path="/departments/new" component={DepartmentForm}/>
          <Route exact path="/departments/department.id" component={DepartmentView}/>
          <Route component={NoMatch}/>
        </Switch>
      </Container>
    </>
  );
}

export default App;
