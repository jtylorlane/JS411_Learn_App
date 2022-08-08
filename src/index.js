import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById("root"));

// #3
const Main = () => (
    <BrowserRouter>
        <Router />
        <App />
    </BrowserRouter>
);

// #4
root.render(<Main/>);

reportWebVitals();
