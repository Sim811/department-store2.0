import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Departments from "./components/Departments";
import DepartmentForm from "./components/DepartmentForm";
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
        </Switch>
      </Container>
    </>
  );
}

export default App;
