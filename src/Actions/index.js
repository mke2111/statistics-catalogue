import axios from 'axios';

export const STOCK_REQUEST = 'STOCK_REQUEST';
export const STOCK_SUCCESS = 'STOCK_SUCCESS';
export const STOCK_FAILURE = 'STOCK_FAILURE';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const changeFilter = (filter) => ({ type: CHANGE_FILTER, filter });

// const url = 'https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=c9576c43313a8d36d1d6049b18a12180';

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

export const fetchStock = (url) => (dispatch) => {
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
