import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css'; // Standard setup, though we use Tailwind in HTML for this example environment

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
