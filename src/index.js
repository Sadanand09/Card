import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TeamPage from './view/TeamPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TeamPage/>
    
  </React.StrictMode>
);
