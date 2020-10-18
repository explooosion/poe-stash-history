export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR';

const initialState = {
  characters: [],
  items: [],
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


    case FETCH_ITEMS:
      return { ...state, loading: true };
    case FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, characters: action.payload };
    case FETCH_ITEMS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
