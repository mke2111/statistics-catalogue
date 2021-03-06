import React from 'react';
import { PropTypes } from 'prop-types';
import { textToBigCurrency } from '../helpers/componentHelp';

const DashAsset = ({
  asset,
}) => (

  <li
    key={asset.id}
    className="single-data text-center bg-transparent shadow-lg rounded"
  >
    <div>
      <img src={asset.image} alt={asset.name} className="single-image" />
    </div>
    <div>
      <p className="text-white text-capitalize">{asset.id}</p>
      <div>
        <p>{`${textToBigCurrency(asset.market_cap)} `}</p>
        <p>
          Rank
          {' '}
          {asset.market_cap_rank}
        </p>
      </div>
      <p className="text-uppercase">{asset.symbol}</p>
    </div>
  </li>
);

DashAsset.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.string.isRequired,
    market_cap: PropTypes.number.isRequired,
    market_cap_rank: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default DashAsset;
