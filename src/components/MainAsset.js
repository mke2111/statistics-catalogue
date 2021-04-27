import React from 'react';
import { PropTypes } from 'prop-types';
import { textToBigCurrency } from '../helpers/componentHelp';

const MainAsset = ({
  asset,
  // currency,
}) => (

  <div className="d-flex flex-row justify-content-around align-items-center shadow-lg bg-body rounded">
    <div>
      <img src={asset.image} alt={asset.name} className="single-image ml-5" />
    </div>
    <div className="d-flex flex-column px-5 text-center shadow-lg bg-body rounded">
      <h6 className="text-white text-capitalize">{asset.id}</h6>
      <p>{`${textToBigCurrency(asset.market_cap)} `}</p>
      <p className="text-uppercase">{asset.symbol}</p>
    </div>
  </div>
);

MainAsset.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.string.isRequired,
    market_cap: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  // currency: PropTypes.string.isRequired,
};

export default MainAsset;
