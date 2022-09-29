import "./App.css";
import { Route, Switch } from "react-router";
import { Main } from "./components/Main/Main";
import { Starships } from "./components/Starhips/Starships";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Detail } from "./components/Starhips/Detail";
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