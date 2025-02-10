
export const LOAD_TODOS_REQUEST    = 'LOAD_TODOS_REQUEST';
export const LOAD_TODOS_SUCCESS    = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE    = 'LOAD_TODOS_FAILURE';

export const ADD_TODO            = 'ADD_TODO';
export const ADD_TODO_SUCCESS    = 'ADD_TODO_SUCCESS';

export const DELETE_TODO         = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';

export const TOGGLE_TODO         = 'TOGGLE_TODO';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';

export const EDIT_TODO           = 'EDIT_TODO';
export const EDIT_TODO_SUCCESS   = 'EDIT_TODO_SUCCESS';

export const CLEAR_TODOS         = 'CLEAR_TODOS';
export const CLEAR_TODOS_SUCCESS = 'CLEAR_TODOS_SUCCESS';

export const loadTodosRequest = () => ({ type: LOAD_TODOS_REQUEST });
export const loadTodosSuccess = todos => ({ type: LOAD_TODOS_SUCCESS, payload: todos });
export const loadTodosFailure = error => ({ type: LOAD_TODOS_FAILURE, payload: error });

export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const addTodoSuccess = todo => ({ type: ADD_TODO_SUCCESS, payload: todo });

export const deleteTodo = id => ({ type: DELETE_TODO, payload: id });
export const deleteTodoSuccess = id => ({ type: DELETE_TODO_SUCCESS, payload: id });

export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id });
export const toggleTodoSuccess = id => ({ type: TOGGLE_TODO_SUCCESS, payload: id });

export const editTodo = (id, text) => ({ type: EDIT_TODO, payload: { id, text } });
export const editTodoSuccess = ({ id, text }) => ({ type: EDIT_TODO_SUCCESS, payload: { id, text } });

export const clearTodos = () => ({ type: CLEAR_TODOS });
export const clearTodosSuccess = () => ({ type: CLEAR_TODOS_SUCCESS });
