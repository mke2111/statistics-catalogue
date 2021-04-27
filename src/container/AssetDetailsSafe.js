import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import DataDetail from '../components/DataDetail';
import { textToBigCurrency } from '../helpers/componentHelp';
import { ReactComponent as GoBack } from '../assets/icons/pagePrev.svg';

const AssetDetailsSafe = ({
  match,
  currentCryptoList,
  currencyFilter,
}) => {
  const asset = currentCryptoList.find((asset) => asset.id === match.match.params.id);
  let assetRender;
  if (asset) {
    const showData = [
      { 'Market Cap': asset.market_cap },
      { Symbol: asset.symbol },
      {
        ath: asset.ath,
        ath_date: asset.ath_date,
      },
      { 'Low 24h': asset.low_24h },
      { 'High 24h': asset.high_24h },
      { 'Total Volume': asset.total_volume },
    ];
    assetRender = (
      <>
        <Link to={{
          pathname: '/',
        }}
        >
          <GoBack className="border rounded border-dark ml-5 mt-3 p-1" />
        </Link>
        <div className="d-flex flex-row justify-content-around py-2 w-75 m-auto shadow-lg">
          <div>
            <img src={asset.image} alt={asset.name} className="single-image" />
          </div>
          <div className="">
            <h1 className="text-capitalize text-white">{asset.id}</h1>
            <div className="">
              <h2>
                {`${textToBigCurrency(asset.current_price)} `}
                {'   '}
                <span className="text-uppercase text-white">{currencyFilter}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="w-75 m-auto text-white text-uppercase">
          <h4>
            {asset.symbol}
          </h4>
        </div>
        <ul>
          {
            showData.map((data, id) => (
              // eslint-disable-next-line
              <DataDetail idRow={id} key={id * 2} data={data} />
            ))
          }
        </ul>
      </>
    );
  } else {
    assetRender = <Redirect to="/" />;
  }

  return (
    <div className="asset-detais-box">
      {assetRender}
    </div>
  );
};

const mapStateToProps = (state, match) => ({
  currentCryptoList: state.crypto,
  currencyFilter: state.currencyFilter,
  match,
});

AssetDetailsSafe.propTypes = {
  /*   match: PropTypes.string.isRequired,
    cmatch: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired, */
  currentCryptoList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  currencyFilter: PropTypes.string.isRequired,
  match: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    staticContext: PropTypes.string,
    match: PropTypes.shape({
      isExact: PropTypes.bool,
      path: PropTypes.string,
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default connect(mapStateToProps, null)(AssetDetailsSafe);
