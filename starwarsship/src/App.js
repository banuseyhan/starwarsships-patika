import "./App.css";
import { Route, Switch } from "react-router";
import { Main } from "./components/Main/Main";
import { Starships } from "../src/components/Starships/Starships";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Detail } from "../src/components/Starships/Detail";
const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/Starships" component={Starships} />
      <Route path ="/Starships/Detail" component={Detail}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
