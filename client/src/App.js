import React from "react";
import { Provider } from "react-redux";
import generarStore from "./Store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  const store = generarStore();
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
