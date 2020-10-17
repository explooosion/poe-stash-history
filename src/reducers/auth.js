export const FETCH_AUTH = 'FETCH_AUTH';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR';

const initialState = {
  cookie: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH:
      return { ...state, loading: true };
    case FETCH_AUTH_SUCCESS:
      return { ...state, loading: false, cookie: action.payload };
    case FETCH_AUTH_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
