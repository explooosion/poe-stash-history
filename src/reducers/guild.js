import _ from 'lodash';

export const FETCH_STASH_HISTORY = 'FETCH_STASH_HISTORY';
export const FETCH_STASH_HISTORY_SUCCESS = 'FETCH_STASH_HISTORY_SUCCESS';
export const FETCH_STASH_HISTORY_ERROR = 'FETCH_STASH_HISTORY_ERROR';

export const FETCH_GUILD_PROFILE = 'FETCH_GUILD_PROFILE';
export const FETCH_GUILD_PROFILE_SUCCESS = 'FETCH_GUILD_PROFILE_SUCCESS';
export const FETCH_GUILD_PROFILE_ERROR = 'FETCH_STASH_HISTORY_ERROR';

export const FETCH_MEMBER_CHARACTERS = 'FETCH_MEMBER_CHARACTERS';
export const FETCH_MEMBER_CHARACTERS_SUCCESS =
  'FETCH_MEMBER_CHARACTERS_SUCCESS';
export const FETCH_MEMBER_CHARACTERS_ERROR = 'FETCH_MEMBER_CHARACTERS_ERROR';

export const STORAGE_GUILD_PROFILE = 'STORAGE_GUILD_PROFILE';
export const STORAGE_MEMBER_CHARACTERS = 'STORAGE_MEMBER_CHARACTERS';

const initialState = {
  id: '',
  name: '',
  url: '',
  tag: '',
  history: [],
  members: [],
  memberCharactersLoading: false,
  memberCharactersFinished: false,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STASH_HISTORY:
      return { ...state, loading: true };
    case FETCH_STASH_HISTORY_SUCCESS:
      const history = action.payload.map(payload => {
        const p = payload;
        const { characterName: name, league } = p;
        const member = state.members.find(m => _.find(m.characters, { name }));
        if (member) {
          // Replace name with heighest level in league.
          const character = _.chain(member.characters)
            .filter({ league })
            .maxBy('level')
            .value();
          if (character) p.characterName = character.name;
        }
        return p;
      });
      return { ...state, loading: false, history };
    case FETCH_STASH_HISTORY_ERROR:
      return { ...state, loading: false };

    case FETCH_GUILD_PROFILE:
      return { ...state, loading: true };
    case FETCH_GUILD_PROFILE_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case FETCH_GUILD_PROFILE_ERROR:
      return { ...state, loading: false };

    case FETCH_MEMBER_CHARACTERS:
      return { ...state, loading: true, memberCharactersLoading: true };
    case FETCH_MEMBER_CHARACTERS_SUCCESS:
      state.members.forEach(member => {
        const m = member;
        const target = action.payload.find(
          p => p.accountName === m.accountName
        );
        m.characters = target ? target.characters : [];
        m.public = target.characters.length > 0 ? true : false;
      });
      return {
        ...state,
        loading: false,
        memberCharactersLoading: false,
        memberCharactersFinished: true,
      };
    case FETCH_MEMBER_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        memberCharactersLoading: false,
        memberCharactersFinished: false,
      };

    default:
      return state;
  }
};
