import React from 'react';
import SplitPane from 'react-split-pane';

import CDCbox from './CDCbox.js';
import Form from './Form.js';
import WelcomeText from './welcomeText.js'
import ChartPanel from './Chart.js'
import '../styles/dashboard.css';

// note:
// we should render all of the components of the dashboard in this Dashboard component
// the we can solely export Dashboard to index.js
const Dashboard = () => (
  <div id="dashboard">
    {/* <h1>dashboard place holder</h1> */}
    <SplitPane 
      className="splitPane"
      split="vertical" 
      allowResize={false}
      defaultSize={1500}
      primary="second"
      pane1Style={{backgroundColor:"#92DAD4"}}
      >
        <div className="leftPanel">
          <div className="leftPanel-text">
            <WelcomeText />
          </div>
          <br />
          <div className="leftPanel-form">
            <Form />
          </div>
        </div>
        <div className="rightPanel">
          <ChartPanel/>
          <CDCbox/>
          
        </div>
    </SplitPane>
  </div>
);

export default Dashboard;
