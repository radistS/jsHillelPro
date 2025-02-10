import {
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
  ADD_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  EDIT_TODO_SUCCESS,
  CLEAR_TODOS_SUCCESS,
} from './actions';

const initialState = {
  todos: [],
  error: null,
  loading: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS_SUCCESS:
      return { ...state, todos: action.payload, loading: false };
    case LOAD_TODOS_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] };

    case DELETE_TODO_SUCCESS:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };

    case TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        ),
      };

    case CLEAR_TODOS_SUCCESS:
      return { ...state, todos: [] };

    default:
      return state;
  }
};

export default todoReducer;
