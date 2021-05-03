import {
  CURRENCY_UPDATE,
  GET_CURRENT_CURRENCY,
} from '../helpers/help';

const currencyFilter = (state = 'usd', action) => {
  switch (action.type) {
    case CURRENCY_UPDATE:
      return action.filter;

    case GET_CURRENT_CURRENCY:
      return state;

    default:
      return state;
  }
};

export default currencyFilter;
