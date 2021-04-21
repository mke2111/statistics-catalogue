import React from 'react';
import PropTypes from 'prop-types';

function StockCard({ stock }) {
  return (
    <div className="size main" key={stock.id}>
      <p>{stock.ticker}</p>
      <p>{stock.symbol}</p>
      <a href={`\\stock\\${stock.ticker}`} className=" w-100"><p>{stock.name}</p></a>
      <p>{stock.price}</p>
      <p>{stock.currency}</p>
      <p>{stock.changesPercentage}</p>
    </div>
  );
}

StockCard.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string,
    symbol: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    currency: PropTypes.string,
    changesPercentage: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockCard;
