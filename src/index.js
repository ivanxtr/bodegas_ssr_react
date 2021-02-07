import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Listings from './Listings';
import Listing from './Listing'
import './index.css';
import * as serviceWorker from './serviceWorker';
if(window.location.pathname === '/') {
  ReactDOM.hydrate(<App />, document.getElementById('root'));
  serviceWorker.register(); 
}
if(window.location.pathname === '/rent') {
  ReactDOM.hydrate(<Listings />, document.getElementById('root'));
  serviceWorker.register();
}
if(window.location.pathname === '/detail') {
  ReactDOM.hydrate(<Listing />, document.getElementById('root'));
  serviceWorker.register(); 
}
