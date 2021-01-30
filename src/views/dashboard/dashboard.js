import React from 'react';
import SplitPane from 'react-split-pane';
import CDCbox from '../../components/CDCbox/CDCbox'
import Form from './form/form';
import './dashboard.css';

// note:
// we should render all of the components of the dashboard in this Dashboard component
// the we can solely export Dashboard to index.js
const Dashboard = () => (
  <div id="dashboard">
    <h1>dashboard place holder</h1>
    <SplitPane 
      className="splitPane"
      split="vertical" 
      allowResize={false}
      defaultSize={1200}
      primary="second"
      pane1Style={{backgroundColor:"#92DAD4"}}
      >
        <div className="leftPanel">
          <h1>Welcome Back!</h1>
          <br />
          <Form />
        </div>
        <div className="rightPanel">
          put rightside components here
          <CDCbox />
        </div>
    </SplitPane>
  </div>
);

export default Dashboard;
