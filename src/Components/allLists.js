import React from 'react';
import PropTypes from 'prop-types';

function StockCard({ stock }) {
  return (
    <div className="size">
      <p>{stock.ticker}</p>
      <p>{stock.companyName}</p>
      <p>{stock.price}</p>
      <p>{stock.currency}</p>
      <div className="mt-auto">
        <a href={`\\stock\\${stock.ticker}`} className="btn btn-outline-success w-100">Details</a>
      </div>
    </div>
  );
}

StockCard.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    currency: PropTypes.string,
    changesPercentage: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockCard;
