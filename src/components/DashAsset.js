import React from 'react';
import { PropTypes } from 'prop-types';
import style from '../styles/DashAsset.module.css';
import { textToBigCurrency } from '../helpers/componentHelp';

const DashAsset = ({
  asset,
  currency,
}) => (

  <li
    key={asset.id}
    className="single-data"
  >
    <div>
      <img src={asset.image} alt={asset.name} className="single-image" />
    </div>
    <div className={`${style.downBox} flexColEnd`}>
      <h1>{asset.id}</h1>
      <div className={style.marketCap}>
        <h2>{`${textToBigCurrency(asset.market_cap)} `}</h2>
        <h2>{`  ${currency}`}</h2>
      </div>
      <h2>{asset.symbol}</h2>
    </div>
  </li>
);

DashAsset.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.string.isRequired,
    market_cap: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  currency: PropTypes.string.isRequired,
};

export default DashAsset;
