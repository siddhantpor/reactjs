import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters.jsx';


ReactDOM.render(
    <Counters />, document.getElementById("root") //sdfdsf
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// this imports the applications
// this modifies the html root, hence it shows up nicely.

// if something stupid not working, just brute force restart server (npm start) LOL

// bootstrap makes it look pretty
// LMAO LMLAHO