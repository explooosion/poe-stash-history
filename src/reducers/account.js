export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

const initialState = {
  characters: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, loading: true };
    case FETCH_CHARACTERS_SUCCESS:
      return { ...state, loading: false, characters: action.payload };
    case FETCH_CHARACTERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
