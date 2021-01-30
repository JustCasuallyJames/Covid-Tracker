import firebase from 'firebase/app';
import 'firebase/auth';

require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "covid-tracker-23695.firebaseapp.com",
    projectId: "covid-tracker-23695",
    storageBucket: "covid-tracker-23695.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export default auth;