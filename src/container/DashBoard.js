import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import DashAsset from '../components/DashAsset';
import MainAsset from '../components/MainAsset';
import MainFilter from '../components/MainFilter';
import CurrencyFilter from '../components/CurrencyFilter';
import Paginator from '../components/Paginator';
import { apiToKey } from '../helpers/componentHelp';
import mainFilterCat from '../config/appConfig';

import {
  nextPage, prevPage, updatePage,
  filterUpdate,
  updateApiRenderList,
  currencyUpdate,
} from '../actions/index';

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  changeMainFilter: (filter) => dispatch(filterUpdate(filter)),
  changeCurrencyFilter: (filter) => {
    dispatch(currencyUpdate(filter));
    dispatch(updateApiRenderList());
  },
  handlePaginator: (action) => {
    if (action === 'NEXT') { dispatch(nextPage()); }
    if (action === 'PREV') { dispatch(prevPage()); }
  },
  changePage: (newPage) => dispatch(updatePage(newPage)),
});

const sortAssetsList = (object, page, property) => {
  const itemsPerPage = 11;
  const from = (itemsPerPage * page) - itemsPerPage;
  const to = (itemsPerPage * page);
  return object.sort((a, b) => b[property] - a[property]).slice(from, to);
};

// Using React Hooks
const RenderDashBoard = ({
  state,
  changeMainFilter,
  changeCurrencyFilter,
  handlePaginator,
}) => {
  const sortedAssetList = sortAssetsList(state.crypto, state.page, state.mainFilter);

  return (
    <>
      <div className="container vh-100">
        <div className="d-flex flex-row justify-content-around pt-2">
          <MainFilter
            changeMainFilter={changeMainFilter}
          />
          <h3 className="text-center text-muted">BiIt</h3>
          <CurrencyFilter
            state={state}
            changeCurrencyFilter={changeCurrencyFilter}
          />
        </div>
        <Link
          key={0}
          to={`/asset/${sortedAssetList[0].id}`}
        >
          <MainAsset
            asset={sortedAssetList[0]}
            currency={state.currencyFilter}
          />
        </Link>
        <div className="d-flex flex-row justify-content-around m-0">
          <p>
            {apiToKey(state.mainFilter, mainFilterCat)}
          </p>
          <Paginator page={state.page} handlePaginator={handlePaginator} />
        </div>
        <ul id="list" className="list-unstyled rounded mt-0">
          {
            sortedAssetList.map((asset, id) => (
              id !== 0
                ? (
                  <React.Fragment key={asset.id}>

                    <Link
                      to={`/asset/${asset.id}`}
                    >
                      <DashAsset
                        currency={state.currencyFilter}
                        asset={asset}
                        boxId={id}
                      />
                    </Link>
                  </React.Fragment>

                )
                : ''
            ))
          }
        </ul>
      </div>
    </>
  );
};

const DashBoard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RenderDashBoard);

RenderDashBoard.propTypes = {
  state: PropTypes.shape({
    crypto: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    page: PropTypes.number.isRequired,
    mainFilter: PropTypes.string.isRequired,
    currencyFilter: PropTypes.string.isRequired,
  }).isRequired,
  changeMainFilter: PropTypes.func.isRequired,
  changeCurrencyFilter: PropTypes.func.isRequired,
  handlePaginator: PropTypes.func.isRequired,
};

export default DashBoard;
