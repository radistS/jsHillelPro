import { combineReducers } from 'redux';

const initialApiState = {
  data: null,
  loading: false,
  error: null,
  url: null,
};

const apiReducer = (state = initialApiState, action) => {
  console.log('Action:', action);
  console.log('State before:', state);
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: null, data: null, url: action.payload };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'CLEAR_DATA':
      return initialApiState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  api: apiReducer,
});

export default rootReducer;
