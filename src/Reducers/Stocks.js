import { FETCH_STOCKS } from '../Actions';

const initialState = {
  stocks: [],
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCKS:
      return { ...state, stocks: action.stocks };
    default:
      return state;
  }
};

export default stocksReducer;
