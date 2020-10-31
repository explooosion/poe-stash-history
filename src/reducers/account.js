export const FETCH_MY_ACCOUNT = 'FETCH_MY_ACCOUNT';
export const FETCH_MY_ACCOUNT_SUCCESS = 'FETCH_MY_ACCOUNT_SUCCESS';
export const FETCH_MY_ACCOUNT_ERROR = 'FETCH_MY_ACCOUNT_ERROR';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR';

export const STORAGE_MY_ACCOUNT = 'STORAGE_MY_ACCOUNT';

const initialState = {
  accountName: null,
  characters: [],
  items: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_ACCOUNT:
      return { ...state, loading: true };
    case FETCH_MY_ACCOUNT_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case FETCH_MY_ACCOUNT_ERROR:
      return { ...state, loading: false };

    case FETCH_CHARACTERS:
      return { ...state, loading: true };
    case FETCH_CHARACTERS_SUCCESS:
      return { ...state, loading: false, characters: action.payload };
    case FETCH_CHARACTERS_ERROR:
      return { ...state, loading: false };

    case FETCH_ITEMS:
      return { ...state, loading: true };
    case FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_ITEMS_ERROR:
      return { ...state, loading: false };

    default:
      return state;
  }
};
