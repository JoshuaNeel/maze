import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Neelavannan from './App';
import * as utils from './utils/utils.js';
utils.calFunction(2,3);
utils.myFunction();
ReactDOM.render(
  <React.StrictMode>
    <Neelavannan />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

