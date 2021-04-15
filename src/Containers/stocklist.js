/* eslint-disable no-return-assign */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStock } from '../Actions';

function StockList({ fetchStock, stockData }) {
  useEffect(() => {
    fetchStock();
  }, []);
  return stockData.loading ? (
    <h2>Loading................</h2>
  ) : stockData.error ? (
    <h2>{stockData.error}</h2>
  ) : (
    <div>
      <div className="grid-list">
        {stockData
          && stockData.stocks
              && stockData.stocks.map((stock) => (
                <a className="p-2 main" href="https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=c9576c43313a8d36d1d6049b18a12180">
                  <p>{ stock.name }</p>
                  { stock.price }
                </a>
              ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  stockData: state.stock,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: () => dispatch(fetchStock()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockList);
