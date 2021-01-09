import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Listing from './Listings';
import './index.css';
import * as serviceWorker from './serviceWorker';

if(window.location.pathname === '/listings') {
  ReactDOM.hydrate(<Listing />, document.getElementById('root'));
  serviceWorker.register();
}
if(window.location.pathname === '/') {
  ReactDOM.hydrate(<App />, document.getElementById('root'));
  serviceWorker.register(); 
}
