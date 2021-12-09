import {createStore, combineReducers, compose} from 'redux';
import { CartReducer } from './reducers/cart';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(CartReducer, composeEnhancers());

export default store;