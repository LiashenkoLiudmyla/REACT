import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CardProvider } from './context/CardContext';
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <CardProvider>
      <App />
    </CardProvider>
    </Router>
  </React.StrictMode>
);