import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './services/firebase';
import './style/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
