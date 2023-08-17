import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {RouterProvider} from "react-router-dom"
import { router } from './router';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <RouterProvider router={router}>
          <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

