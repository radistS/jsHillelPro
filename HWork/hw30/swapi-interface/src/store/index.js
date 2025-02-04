import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import reducer from './swapiReducer.js';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
