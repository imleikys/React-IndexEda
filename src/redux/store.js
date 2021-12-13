import {createStore, combineReducers, compose} from 'redux';
import {CartReducer as cart} from './reducers/cart';
import {ModalReducer as modal} from './reducers/modal';
import {ResponseReducer as response} from './reducers/response';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const rootReducer = combineReducers({cart, modal, response});
const store = createStore(rootReducer, composeEnhancers());

export default store;