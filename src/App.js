import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LogIn from './views/login/login';
import Dashboard from './views/dashboard/dashboard';
import Landing from './views/landing/landing';

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
