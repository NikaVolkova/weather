import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './provider/ThemeProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <App />
  
    
  </React.StrictMode>,
  
);


