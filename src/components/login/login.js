import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import auth from '../firebase/firebase';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const history = useHistory();
    
    const updateEmail = (event) => {
        setEmail(event.target.value)
    }
        
    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    async function signIn() {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            history.push('/dashboard');
        } catch (err) {
            setError(err.message);
            console.log(error);
        }
    }

    async function googleSignIn() {
        try {
            const authProvider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithRedirect(authProvider);
            await auth.getRedirectResult();
            history.push('/dashboard');

        } catch (err) {
            setError(err.message);
            console.log(error);
        }
    }

    const handleOnSubmit = (event) => {
        console.log(event.preventDefault());
        try {
            setError('');
            signIn();
            history.push('/dashboard')
        } catch (err) {
            setError('Unable to log in');
            console.log(error);
        }
    }

    return (
        <div id="login-form">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
            <h3>Log In</h3>
            <form className="d-flex flex-column" onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="text" className="form-control" value={email} placeholder="Enter Email" onChange={updateEmail} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" value={password} placeholder="Enter Password" onChange={updatePassword} required></input>
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
            < br/>
            <button type="button" className="btn btn-primary" onClick={googleSignIn}>Sign in with Google</button>
        </div>
    )
}

export default LogIn;
