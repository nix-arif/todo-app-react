import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './item/itemReducer';

const store = createStore(itemReducer, applyMiddleware(thunk));

export default store;
