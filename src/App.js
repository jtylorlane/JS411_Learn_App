import React, { Component } from "react";
import "./App.css";
import MyFirstClassComponent from "./components/MyFirstClassComponent/index";
// import Layout from "./containers/Layout";
import LayoutFunctional from "./containers/Layout/LayoutFunctional";
import { ExampleComponent, Hidden } from "./components/FunctionalHook/index";
import {
  MyfunctionTodos,
  MyCountComponent,
} from "./components/FunctionalHook/indexUseEffect";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

function App() {
  const message = true;
  return (
    <div className="App">
      <Link to="/dash">Dashboard Page</Link>
      
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="primary">
        Disabled
      </Button>
      {/* <MyfunctionTodos/> */}
      {/* <MyCountComponent /> */}
      {/* <Hidden/> */}
      <ExampleComponent />
      <MyFirstClassComponent />
      <LayoutFunctional />
      
    </div>
  );
}

export default App;