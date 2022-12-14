import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
// import "./style.css";
import ContextData from './Context/Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <ContextData>
    <App/>
    </ContextData>
    </Router>
  </React.StrictMode>
);
