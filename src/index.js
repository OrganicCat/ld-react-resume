import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router} from './router'
import './index.css';


ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);
