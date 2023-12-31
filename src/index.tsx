import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { 
  // BrowserRouter,
  HashRouter
 } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
