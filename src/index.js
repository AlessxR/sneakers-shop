import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';

import './index.scss';
import 'macro-css'; // Подключил macro-css Арчакова, удобная штука.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router >
      <App />
    </Router>
  </React.StrictMode>
);

