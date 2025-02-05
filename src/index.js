import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './views/App.jsx';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";

import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./assets/css/argon.css";
import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoLrM1KAxDNxUr2dpiDF-VMFeebmI0Woo",
    authDomain: "nasreenxfaridz.firebaseapp.com",
    databaseURL: "https://nasreenxfaridz.firebaseio.com",
    projectId: "nasreenxfaridz",
    storageBucket: "",
    messagingSenderId: "532419068605",
    appId: "1:532419068605:web:b9736b606485ed9f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
