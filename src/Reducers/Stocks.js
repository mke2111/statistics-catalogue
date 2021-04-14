import {
  STOCK_REQUEST,
  STOCK_SUCCESS,
  STOCK_FAILURE,
} from '../Actions';

const initialState = {
  loading: false,
  stocks: [],
  error: '',
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOCK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STOCK_SUCCESS:
      return {
        loading: false,
        stocks: action.payload,
        error: '',
      };
    case STOCK_FAILURE:
      return {
        loading: false,
        stocks: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default stockReducer;
