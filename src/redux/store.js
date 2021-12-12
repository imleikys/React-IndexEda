import {createStore, combineReducers, compose} from 'redux';
import {CartReducer} from './reducers/cart';
import {ModalReducer} from './reducers/modal';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const rootReducer = combineReducers({CartReducer, ModalReducer});
const store = createStore(rootReducer, composeEnhancers());

export default store;