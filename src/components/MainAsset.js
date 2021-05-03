import React from 'react';
import { PropTypes } from 'prop-types';
import { textToBigCurrency } from '../helpers/componentHelp';

const MainAsset = ({
  asset,
}) => (

  <div className="d-flex flex-row justify-content-around align-items-center shadow-lg container-md bg-body rounded w-7 m-auto p-2">
    <div>
      <img src={asset.image} alt={asset.name} className="single-image img-fluid" />
    </div>
    <div className="d-flex flex-column px-5 text-center shadow-lg bg-body rounded">
      <h6 className="text-white text-capitalize">{asset.id}</h6>
      <p>{`${textToBigCurrency(asset.market_cap)} `}</p>
      <p>
        Rank
        {' '}
        {asset.market_cap_rank}
      </p>
      <p className="text-uppercase">{asset.symbol}</p>
    </div>
  </div>
);

MainAsset.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.string.isRequired,
    market_cap: PropTypes.number.isRequired,
    market_cap_rank: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainAsset;
