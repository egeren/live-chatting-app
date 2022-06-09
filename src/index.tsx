import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import { Provider } from 'react-redux';
import store from './store';
import env from 'react-dotenv';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
