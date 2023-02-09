import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const {
  REACT_APP_APP1_HOST: app1Host,
  REACT_APP_APP2_HOST: app2Host,
} = process.env;

function App1({ history }) {
  return <MicroFrontend history={history} host={app1Host} name="App1" />;
}

function App2({ history }) {
  return <MicroFrontend history={history} host={app2Host} name="App2" />;
}

function Home() {
  return (
    <div className="main-app">
      <App1/>
      <div className="home">
        <App2/>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
