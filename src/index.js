import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'normalize.css';


const script2 = document.createElement('script');
script2.src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js';
script2.async = true;
script2.defer = true;
document.body.appendChild(script2);

const script1 = document.createElement('script');
script1.src =
  'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js';
script1.async = true;
script1.defer = true;
document.body.appendChild(script1);

const script3 = document.createElement('script');
script3.src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js';
script3.async = true;
script3.defer = true;
document.body.appendChild(script3);

const script4 = document.createElement('script');
script4.src= "https://platform.linkedin.com/badges/js/profile.js";
script4.async = true;
script4.defer = true;
document.body.appendChild(script4);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
