import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  LOAD_TODOS_REQUEST,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  CLEAR_TODOS,
  loadTodosSuccess,
  loadTodosFailure,
  addTodoSuccess,
  deleteTodoSuccess,
  toggleTodoSuccess,
  editTodoSuccess,
  clearTodosSuccess,
} from './actions';

function fetchTodosApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Изучить Redux-saga', completed: false },
        { id: 2, text: 'Реализовать TODO приложение', completed: false },
      ]);
    }, 1000);
  });
}

function* loadTodosSaga() {
  try {
    const todos = yield call(fetchTodosApi);
    yield put(loadTodosSuccess(todos));
  } catch (error) {
    yield put(loadTodosFailure(error.message));
  }
}

function* addTodoSaga(action) {
  try {
    yield call(() => new Promise(resolve => setTimeout(resolve, 500)));
    yield put(addTodoSuccess(action.payload));
  } catch (error) {
    console.error(error);
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(() => new Promise(resolve => setTimeout(resolve, 500)));
    yield put(deleteTodoSuccess(action.payload));
  } catch (error) {
    console.error(error);
  }
}

function* toggleTodoSaga(action) {
  try {
    yield call(() => new Promise(resolve => setTimeout(resolve, 500)));
    yield put(toggleTodoSuccess(action.payload));
  } catch (error) {
    console.error(error);
  }
}

function* editTodoSaga(action) {
  try {
    yield call(() => new Promise(resolve => setTimeout(resolve, 500)));
    yield put(editTodoSuccess(action.payload));
  } catch (error) {
    console.error(error);
  }
}

// Сага для очистки списка задач
function* clearTodosSaga() {
  try {
    yield call(() => new Promise(resolve => setTimeout(resolve, 500)));
    yield put(clearTodosSuccess());
  } catch (error) {
    console.error(error);
  }
}

export default function* todoSaga() {
  yield all([
    takeLatest(LOAD_TODOS_REQUEST, loadTodosSaga),
    takeLatest(ADD_TODO, addTodoSaga),
    takeLatest(DELETE_TODO, deleteTodoSaga),
    takeLatest(TOGGLE_TODO, toggleTodoSaga),
    takeLatest(EDIT_TODO, editTodoSaga),
    takeLatest(CLEAR_TODOS, clearTodosSaga),
  ]);
}
