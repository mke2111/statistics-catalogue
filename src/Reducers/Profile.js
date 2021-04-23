import {
  CO_PROFILE,
  STOCK_SUCCESS,
  STOCK_FAILURE,
} from '../Actions';

const initialState = {
  loading: false,
  profile: [],
  error: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CO_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case STOCK_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
        error: '',
      };
    case STOCK_FAILURE:
      return {
        ...state,
        loading: false,
        profile: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default profileReducer;
