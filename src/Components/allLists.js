import React from 'react';
import PropTypes from 'prop-types';

function StockCard({ stock }) {
  return (
    <div className="size main" key={stock.id}>
      <p>{stock.ticker}</p>
      <p>{stock.symbol}</p>
      <p>{stock.name}</p>
      <p>{stock.price}</p>
      <p>{stock.changesPercentage}</p>
      <a href={`\\stock\\${stock.ticker}`} className=" w-100">Details</a>
    </div>
  );
}

StockCard.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string,
    symbol: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    changesPercentage: PropTypes.string,
  }).isRequired,
};

export default StockCard;
