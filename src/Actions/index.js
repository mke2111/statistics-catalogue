import axios from 'axios';

export const STOCK_REQUEST = 'STOCK_REQUEST';
export const STOCK_SUCCESS = 'STOCK_SUCCESS';
export const STOCK_FAILURE = 'STOCK_FAILURE';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CO_PROFILE = 'CO_PROFILE';

const STOCK_LIST_URL = 'https://financialmodelingprep.com/api/v3/actives?apikey=c9576c43313a8d36d1d6049b18a12180';
const STOCK_GAINERS = 'https://financialmodelingprep.com/api/v3/gainers?apikey=c9576c43313a8d36d1d6049b18a12180';
const STOCK_LOSERS = 'https://financialmodelingprep.com/api/v3/losers?apikey=c9576c43313a8d36d1d6049b18a12180';

export const changeFilter = (filter) => ({ type: CHANGE_FILTER, filter });

// const url = 'https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=c9576c43313a8d36d1d6049b18a12180';

export const fetchStockRequest = () => ({
  type: STOCK_REQUEST,
});

export const fetchProfile = () => ({
  type: CO_PROFILE,
});

export const fetchStockSuccess = (stocks) => ({
  type: STOCK_SUCCESS,
  payload: stocks,
});

export const fetchStockFailure = (error) => ({
  type: STOCK_FAILURE,
  payload: error,
});

export const fetchStock = (urlType) => (dispatch) => {
  let url = STOCK_LIST_URL;
  if (urlType === 'active') url = STOCK_LIST_URL;
  if (urlType === 'gainers') url = STOCK_GAINERS;
  if (urlType === 'losers') url = STOCK_LOSERS;

  dispatch(fetchStockRequest());
  axios
    .get(url)
    .then((response) => {
      // response.data is the users
      const stocks = response.data;
      dispatch(fetchStockSuccess(stocks));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchStockFailure(error.message));
    });
};

export const fetchCoProfile = (url) => (dispatch) => {
  dispatch(fetchStockRequest());
  axios
    .get(url)
    .then((response) => {
      // response.data is the users
      const stocks = response.data;
      dispatch(fetchStockSuccess(stocks));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchStockFailure(error.message));
    });
};
