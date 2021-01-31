import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LogIn from './components/login.js';
import Dashboard from './components/dashboard.js';
import Landing from './components/landing.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} ></Route>
          <Route path="/login" component={LogIn} ></Route>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
