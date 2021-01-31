import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LogIn from './components/login';
import Dashboard from './components/dashboard';
import Landing from './components/landing';
import LogsList from './components/logsList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} ></Route>
          <Route path="/login" component={LogIn} ></Route>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/logs" component={LogsList}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
