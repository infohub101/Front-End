import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Registration from "./components/Registration";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" render={props => <Login {...props} />} />
          <Route
            path="/registration"
            render={props => <Registration {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;