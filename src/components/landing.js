import React from 'react';
import '../styles/landing.css';
import { ReactComponent as MaskWoman } from '../styles/graphics/mask-woman.svg';
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

    <div id="background-landing">
      <div id="content">
        <h1 className="text" id="title">COVID TRACKER </h1>
        <h3 className="text" id="info">
          See how you've been and where you've been to keep yourself safe and healthy. 
        </h3>
        <button onClick={handleClickStart} id="start">Get Started</button>
        <MaskWoman id="woman-vector"/>
      </div>
    </div>
  )
  }

export default Landing;
