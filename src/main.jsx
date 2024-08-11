import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import cookie from 'react-cookies';
import './index.css';

export const server = "http://localhost:3000";

// Remove the token (as per your code)
const token = cookie.load('jobAuthToken');
const initAuth = !!token;

export const Context = createContext({ isAuthenticated: initAuth });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(initAuth);
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <App />
    </Context.Provider>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  // Ensure we only call createRoot once
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <AppWrapper />
  );
} else {
  console.error('Root element not found');
}
