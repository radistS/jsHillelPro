import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './reducer';
import todoSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoSaga);

export default store;
