import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "./state/index"
import { Provider } from "react-redux"

// import { configureStore } from "@reduxjs/toolkit"
// import globalReducer from "state";
// import { Provider } from "react-redux";

// const store = configureStore({
//   reducer: { 
//     global: globalReducer,
//   }
// })

const store = configureStore({
    reducer: {
      global: globalReducer,
    }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

