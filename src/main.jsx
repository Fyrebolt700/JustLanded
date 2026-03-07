import React from 'react';
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    // Redriects to the app's base url
    //need to useNativate in login page to move it to quiz
    authorizationParams={{ redirect_uri: "http://localhost:5173" }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
)