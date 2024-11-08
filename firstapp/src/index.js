import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import course from'./data.js';
import {place,city,students,demo} from'./data.js'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <>
  <h1>course is{course}</h1>
  <h1>city is{city}</h1>
  <h2>PLace is{place}</h2>
  <h2>{demo()}</h2>
  </>
)

