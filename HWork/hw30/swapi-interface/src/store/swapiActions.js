export const fetchData = (url) => {
  console.log(url)
  return async (dispatch) => {
    dispatch({ type: 'FETCH_REQUEST', payload: url });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE', payload: error.message });
    }
  };
};

export const clearData = () => {
  return { type: 'CLEAR_DATA' };
};
