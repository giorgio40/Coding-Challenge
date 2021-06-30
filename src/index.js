import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import logger from "redux-logger"
import { createStore } from "redux"



import App from './App';


 const store = createStore(thunk, logger);








ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
