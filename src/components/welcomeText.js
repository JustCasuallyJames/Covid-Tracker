import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import '../styles/welcomeText.css';

const WelcomeText = () => {
    const [date, setDate] = useState(new Date());
    const user = firebase.auth().currentUser;
    var name;
    var email;

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer);
        }
    })

    if (user!=null) {
        name = user.displayName;
        email = user.email;
    }

    return (
        <div className="welcome-text-wrapper">
            <h4 id="date">{date.toLocaleDateString()}</h4>
            <h1 id="welcome-back">Welcome Back,</h1>
            <h1 id="welcome-back">{name || email}</h1>
        </div>
    )

}

export default WelcomeText