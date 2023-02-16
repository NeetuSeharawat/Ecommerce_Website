import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//import 'bootstrap/dist/css/bootstrap.min.css';

/* React bootstrap configuration*/

import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
