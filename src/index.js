import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAisk1CqBxDz91HINwzeFFO2OtJD9V4riM",
  authDomain: "chatapp-84ccd.firebaseapp.com",
  databaseURL: "https://chatapp-84ccd.firebaseio.com",
  projectId: "chatapp-84ccd",
  storageBucket: "chatapp-84ccd.appspot.com",
  messagingSenderId: "745955645600",
  appId: "1:745955645600:web:70ecc30cb10a033fd391c5",
  measurementId: "G-XG4RPTFJCE"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
