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
              && stockData.stocks.map((stock) => <p className="p-2 main">{ stock.name }</p>)}
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
