import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {App} from "./App";
import './scss/main.scss'
import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: "AIzaSyCfnJbfmd62J8vKl0Ql0aKxeAKUQQResIM",
	authDomain: "schedule-your-meal.firebaseapp.com",
	databaseURL: "https://schedule-your-meal.firebaseio.com",
	projectId: "schedule-your-meal",
	storageBucket: "schedule-your-meal.appspot.com",
	messagingSenderId: "730957919059",
	appId: "1:730957919059:web:1daea59ee84e98859967a6",
	measurementId: "G-CQ4JCTD811"
};

firebase.initializeApp(firebaseConfig)
let db = firebase.firestore();
let auth = firebase.auth();



ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
