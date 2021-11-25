import React from "react";
import { Provider } from "react-redux";
import generarStore from "./Store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Lines } from "./components/Lines";

function App() {
  const store = generarStore();
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/aereolineas" component={Lines} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
