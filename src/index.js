import React from 'react';
import ReactDOM from 'react-dom/client';
import ConfirmAlertModel from "./ConfirmModel";
import { Provider } from "react-redux";
import store from "./Redux/Store/index";
import Employee from './Employee';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Employee/>
  </Provider>
);
