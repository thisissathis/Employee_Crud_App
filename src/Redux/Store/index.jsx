import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import {employeeReducer} from "../Reducers/index";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({ reducer:employeeReducer }, composeEnhancers(applyMiddleware(thunk)))
export default store;