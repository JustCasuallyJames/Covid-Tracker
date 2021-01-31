import React from 'react';
import SplitPane from 'react-split-pane';
import CDCbox from './CDCbox.js';
import Form from './form.js';
import WelcomeText from './welcomeText.js'
import ChartPanel from './Chart.js'
import ActivityLogButton from './ActivityLogButton.js';
import '../styles/dashboard.css';

// note:
// we should render all of the components of the dashboard in this Dashboard component
// the we can solely export Dashboard to index.js
const Dashboard = () => (
  <div id="dashboard">
    <SplitPane 
      className="splitPane"
      split="vertical"
      overflow="scroll"
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
            <ActivityLogButton/>
          </div>
        </div>

        <div className="rightPanel">
          <CDCbox/>
          <ChartPanel/>  
        </div>
    </SplitPane>
  </div>
);

export default Dashboard;
