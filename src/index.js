import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './pages/App';

// eslint-disable-next-line
import { app } from './config/firebase';

import { ContextUser } from './hooks/UserContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextUser>
        <App />
      </ContextUser>
    </BrowserRouter>
  </React.StrictMode>
);
