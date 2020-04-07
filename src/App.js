import React from 'react';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';

import Header from "./components/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import PostAddAPI from './components/PostAddAPI';
import Settings from './components/Settings';
import SettingsForm from './components/SettingsForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path='/add-post' component={PostAddAPI} />
          <Route path='/login' component={Login}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/update-settings' component={SettingsForm}/>
          <Route path='/' component={Registration}/>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;