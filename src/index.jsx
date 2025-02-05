// 1) Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './css/App.css'

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of the element
const root = ReactDOM.createRoot(el);

// 4) Create a component


// 5) Component on the screen
root.render(<App />);
