import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { useParams } from "react-router";

function App() {
  const Home = () => {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    );
  };

  const Anything = (props) => {
    const { anything } = useParams();
    let phrase = "";
    if (isNaN(anything)) {
      phrase = `The word is : ${anything}`;
    } else {
      phrase = `The number is : ${anything}`;
    }
    return (
      <div>
        <h1>{phrase}</h1>
      </div>
    );
  };

  const Colors = () => {
    const { word } = useParams();
    const { color1 } = useParams();
    const { color2 } = useParams();
    console.log(color1);
    return (
      <div style={{ backgroundColor: color2 }}>
        <h1 style={{ color: color1 }}>{word}</h1>
      </div>
    );
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/:anything">
            <Anything />
          </Route>

          <Route path="/:word/:color1/:color2">
            <Colors />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
