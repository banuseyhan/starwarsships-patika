import "./App.css";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import Starships from "./components/Starships/Starships";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route
        path="/Starships"
        render={({ location }) => <Starships location={location} />}
      />
     
    </div>
  );
}

export default App;
