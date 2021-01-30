import firebase from 'firebase/app';
import 'firebase/auth';

require('dotenv').config();

const firebaseConfig = {
    apiKey: 'AIzaSyAfyqx-LR2YgAiwc57fTMknLH2Zrt17aNI',
    authDomain: "covid-tracker-23695.firebaseapp.com",
    projectId: "covid-tracker-23695",
    storageBucket: "covid-tracker-23695.appspot.com",
    messagingSenderId: '150153578382',
    appId: '1:150153578382:web:51ca4d39f905e46c5106df',
    measurementId: 'G-NVFX9RMGZQ',
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export default auth;