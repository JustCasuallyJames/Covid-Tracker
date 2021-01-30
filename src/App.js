import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LogIn from '../src/components/login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            landing page
          </Route>
          <Route path="/login" component={LogIn} />
          <Route path="/dashboard">
            dashboard
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
