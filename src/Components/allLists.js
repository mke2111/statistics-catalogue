import React from 'react';
import PropTypes from 'prop-types';

function StockCard({ stock }) {
  return (
    <div className="size main">
      <p>{stock.ticker}</p>
      <a href={`\\stock\\${stock.ticker}`} className=" w-100"><p>{stock.companyName}</p></a>
      <p>{stock.price}</p>
      <p>{stock.currency}</p>
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
