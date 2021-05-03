import React from 'react';
import { PropTypes } from 'prop-types';
import { getDate, textToBigCurrency } from '../helpers/componentHelp';

const DataDetail = ({
  data,
}) => {
  let k2; let
    v1;

  const keys = Object.keys(data);
  if (keys.length > 1) {
    v1 = data[keys[0]];
    k2 = getDate(data[keys[1]]); // handles ath date
  } else {
    v1 = data[keys[0]];
    k2 = null;
  }

  return (
    <div className="bg-transparent shadow-lg rounded d-flex flex-row justify-content-between w-75 mx-auto my-3 align-items-center px-3">
      <div className="p-3">
        <p>{keys[0]}</p>
        {keys[1] === null ? '' : <p>{k2}</p>}
      </div>
      <div className="text-white text-uppercase">
        {keys[0] === 'Market Cap'
          ? <p>{textToBigCurrency(v1)}</p>
          : <p>{v1}</p>}
      </div>
    </div>
  );
};

DataDetail.propTypes = {
  data: PropTypes.shape({
    'Market Cap': PropTypes.number,
    Symbol: PropTypes.string,
    ath: PropTypes.number,
    ath_date: PropTypes.string,
    'Low 24h': PropTypes.number,
    'High 24h': PropTypes.number,
    'Total Volume': PropTypes.number,
  }).isRequired,
};

export default DataDetail;
