import axios from 'axios';

export const STOCK_REQUEST = 'STOCK_REQUEST';
export const STOCK_SUCCESS = 'STOCK_SUCCESS';
export const STOCK_FAILURE = 'STOCK_FAILURE';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'PROFILE_FAILURE';
export const CO_PROFILE = 'CO_PROFILE';

const STOCK_CRYPTO = 'https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=c9576c43313a8d36d1d6049b18a12180';
const STOCK_INDEX = 'https://financialmodelingprep.com/api/v3/quotes/index?apikey=c9576c43313a8d36d1d6049b18a12180';
const STOCK_FOREX = 'https://financialmodelingprep.com/api/v3/quotes/forex?apikey=c9576c43313a8d36d1d6049b18a12180';
const STOCK_COMMODITY = 'https://financialmodelingprep.com/api/v3/quotes/commodity?apikey=c9576c43313a8d36d1d6049b18a12180';
const STOCK_NYSE = 'https://financialmodelingprep.com/api/v3/quotes/nyse?apikey=c9576c43313a8d36d1d6049b18a12180';

const STOCK_LIST_URL = 'https://financialmodelingprep.com/api/v3/actives?apikey=c9576c43313a8d36d1d6049b18a12180';
const STOCK_GAINERS = 'https://financialmodelingprep.com/api/v3/gainers?apikey=c9576c43313a8d36d1d6049b18a12180';
const STOCK_LOSERS = 'https://financialmodelingprep.com/api/v3/losers?apikey=c9576c43313a8d36d1d6049b18a12180';

const stockProfileUrl = (stockSymbol) => (
  `https://financialmodelingprep.com/api/v3/profile/${stockSymbol}?apikey=c9576c43313a8d36d1d6049b18a12180`
);

export const fetchStockRequest = () => ({
  type: STOCK_REQUEST,
});

export const fetchStockSuccess = (stocks) => ({
  type: STOCK_SUCCESS,
  payload: stocks,
});

export const fetchStockFailure = (error) => ({
  type: STOCK_FAILURE,
  payload: error,
});

export const fetchProfile = () => ({
  type: CO_PROFILE,
});

export const fetchProfileSuccess = (profile) => ({
  type: PROFILE_SUCCESS,
  payload: profile,
});

export const fetchProfileFailure = (error) => ({
  type: PROFILE_FAILURE,
  payload: error,
});

export const fetchStock = (urlType) => (dispatch) => {
  let url = STOCK_LIST_URL;
  if (urlType === 'active') url = STOCK_LIST_URL;
  if (urlType === 'gainers') url = STOCK_GAINERS;
  if (urlType === 'losers') url = STOCK_LOSERS;
  if (urlType === 'crypto') url = STOCK_CRYPTO;
  if (urlType === 'index') url = STOCK_INDEX;
  if (urlType === 'forex') url = STOCK_FOREX;
  if (urlType === 'commodity') url = STOCK_COMMODITY;
  if (urlType === 'nyse') url = STOCK_NYSE;

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

export const fetchCoProfile = (symbol) => (dispatch) => {
  dispatch(fetchProfile());
  axios
    .get(stockProfileUrl(symbol), { mode: 'cors' })
    .then((response) => {
      // response.data is the users
      // const stocks = response.data;
      const datas = response.data;
      dispatch(fetchProfileSuccess(datas));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchProfileFailure(error.message));
    });
};
