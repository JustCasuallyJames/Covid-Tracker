import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LogIn from './views/login/login';
import Dashboard from './views/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <h3>landing page</h3>
          </Route>
          <Route path="/login" component={LogIn} />
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
