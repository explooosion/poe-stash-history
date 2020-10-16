import MOCK_HISTORY from '../mocks/MOCK_HISTORY';

export const FETCH_STASH_HISTORY = 'FETCH_STASH_HISTORY';
export const FETCH_STASH_HISTORY_SUCCESS = 'FETCH_STASH_HISTORY_SUCCESS';
export const FETCH_STASH_HISTORY_ERROR = 'FETCH_STASH_HISTORY_ERROR';

const initialState = {
  history: process.env.NODE_ENV === 'production' ? [] : MOCK_HISTORY,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STASH_HISTORY:
      return { ...state, loading: true };
    case FETCH_STASH_HISTORY_SUCCESS:
      return { ...state, loading: false, history: action.payload };
    case FETCH_STASH_HISTORY_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
