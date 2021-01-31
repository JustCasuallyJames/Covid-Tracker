import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import './welcomeText.css';

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
            <h6>{date.toLocaleDateString()}</h6>
            <h1>Welcome Back,</h1>
            <h1>{name || email}</h1>
        </div>
    )

}

export default WelcomeText