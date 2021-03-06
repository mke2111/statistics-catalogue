import React from 'react';
import { PropTypes } from 'prop-types';

const CurrencyFilter = ({
  changeCurrencyFilter,
}) => {
  const categories = [
    {
      key: 'USD',
      api: 'usd',
    },
    {
      key: 'EUR',
      api: 'eur',
    },
    {
      key: 'ARS',
      api: 'ars',
    },
  ];

  const handleChange = (e) => {
    changeCurrencyFilter(e.target.value);
  };

  return (

    <div>
      <select onChange={handleChange}>
        {
          categories.map((cat, id) => (
            <option key={`opt_${id * 2}`} value={cat.api}>{cat.key}</option>
          ))
        }
      </select>
    </div>
  );
};

CurrencyFilter.propTypes = {
  changeCurrencyFilter: PropTypes.func.isRequired,
};

export default CurrencyFilter;
