import React from 'react';
import './landing.css';
import { ReactComponent as MaskPerson } from './graphics/mask-woman.svg';
import { useHistory } from 'react-router-dom';

// note:
// we should render all of the components of the dashboard in this Dashboard component
// the we can solely export Dashboard to index.js
const Landing = () => {
  const history = useHistory();


  const handleClickStart = () => {
    history.push('/login')
  }


  return (

    <div id="background">
      <div id="content">
        <h1 className="text" id="title">COVID TRACKER </h1>
        <h3 className="text" id="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolom.
        </h3>
        <button onClick={handleClickStart} id="start">Get Started</button>
        <MaskPerson id="man-vector"/>
      </div>
    </div>
  )
  }

export default Landing;
