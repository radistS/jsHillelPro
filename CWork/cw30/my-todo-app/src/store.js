import { createStore, applyMiddleware } from 'redux';
import { thunk } from "redux-thunk";

const SET_TODOS   = 'SET_TODOS';
const ADD_TODO    = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const EDIT_TODO   = 'EDIT_TODO';
const CLEAR_TODOS = 'CLEAR_TODOS';

const initialState = {
  todos: []
};


function todosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      console.log("Run: SET_TODOS")
      return { ...state, todos: action.payload };

    case ADD_TODO:
      console.log("Run: ADD_TODOS")
      return { ...state, todos: [...state.todos, action.payload] };

    case REMOVE_TODO:
      console.log("Run: REMOVE_TODOS")
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };

    case TOGGLE_TODO:
      console.log("Run: TOGGLE_TODOS")
      return {
        ...state,
        todos: state.todos.map(todo =>
            todo.id === action.payload.id
                ? { ...todo, completed: action.payload.completed }
                : todo
        )
      };

    case EDIT_TODO:
      console.log("Run: EDIT_TODOS")
      return {
        ...state,
        todos: state.todos.map(todo =>
            todo.id === action.payload.id
                ? { ...todo, title: action.payload.title, description: action.payload.description }
                : todo
        )
      };

    case CLEAR_TODOS:
      console.log("Run: CLEAR_TODOS")
      return { ...state, todos: [] };

    default:
      return state;
  }
}

const API_URL = 'http://localhost:4002/todos';

const mapTodo = (todo) => ({
  id: todo._id,
  title: todo.title,
  description: todo.description,
  completed: todo.completed
});

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const todos = data.map(mapTodo);
    dispatch({
      type: SET_TODOS,
      payload: todos,
    });
  } catch (error) {
    console.error("Ошибка при получении задач:", error);
  }
};

export const addTodo = (title, description) => async (dispatch) => {
  try {
    const newTodo = { title, description, completed: false };
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    const todo = mapTodo(data);
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  } catch (error) {
    console.error("Ошибка при добавлении задачи:", error);
  }
};

export const removeTodo = (id) => async (dispatch) => {
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    dispatch({
      type: REMOVE_TODO,
      payload: { id },
    });
  } catch (error) {
    console.error("Ошибка при удалении задачи:", error);
  }
};

export const toggleTodo = (id) => async (dispatch, getState) => {
  try {
    const todo = getState().todos.find(t => t.id === id);
    if (!todo) return;
    const updatedTodo = {
      title: todo.title,
      description: todo.description,
      completed: !todo.completed
    };
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo),
    });
    const data = await response.json();
    dispatch({
      type: TOGGLE_TODO,
      payload: { id, completed: data.completed },
    });
  } catch (error) {
    console.error("Ошибка при переключении статуса задачи:", error);
  }
};

export const editTodo = (id, title, description) => async (dispatch, getState) => {
  try {
    const todo = getState().todos.find(t => t.id === id);
    if (!todo) return;
    // Формируем обновлённую задачу: обновляем title и description, оставляя completed без изменений.
    const updatedTodo = {
      title,
      description,
      completed: todo.completed
    };
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo),
    });
    const data = await response.json();
    dispatch({
      type: EDIT_TODO,
      payload: { id, title: data.title, description: data.description },
    });
  } catch (error) {
    console.error("Ошибка при редактировании задачи:", error);
  }
};

export const clearTodos = () => async (dispatch, getState) => {
  try {
    const { todos } = getState();
    await Promise.all(todos.map(todo =>
        fetch(`${API_URL}/${todo.id}`, { method: 'DELETE' })
    ));
    dispatch({ type: CLEAR_TODOS });
  } catch (error) {
    console.error("Ошибка при очистке задач:", error);
  }
};

export const store = createStore(todosReducer, applyMiddleware(thunk));
