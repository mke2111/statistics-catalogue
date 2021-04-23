/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import StockCard from '../Components/allLists';
import { fetchStock } from '../Actions';

function StockList({ fetchStock, stockData }) {
  const url = useSelector((state) => state.urlType);

  useEffect(() => {
    fetchStock(url);
  }, [url]);
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
                <StockCard
                  key={stock.ticker}
                  stock={stock}
                />
              ))}
      </div>
    </div>
  );
}

StockList.propTypes = {
  stockData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    stocks: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
  }),
  fetchStock: PropTypes.func.isRequired,
};

StockList.defaultProps = {
  stockData: {
    stocks: [],
    loading: false,
  },
};

const mapStateToProps = (state) => ({
  stockData: state.stock,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: (url) => dispatch(fetchStock(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockList);
