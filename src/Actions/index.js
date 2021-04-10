/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const FETCH_STOCKS = 'FETCH_STOCKS';

const url = `https://financialmodelingprep.com/api/v3/quotes/index?apikey=${process.env}`;

export const fetchStocks = () => async (dispatch) => {
  const stockSample = await axios.get(url);
  dispatch({ stocks: stockSample.data, type: FETCH_STOCKS });
};
