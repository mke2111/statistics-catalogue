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
// import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
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
  const itemsPerPage = 6;
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
  // const [input, setInput] = React.useState('');
  // const [ks, setKs] = React.useState([{ name: '', idpos: null }]);

  // const handleInputSearch = (event) => {
  //   setInput(event.target.value);
  //   const hits = getInputHints(event.target.value, state.crypto);
  //   setKs(hits); // update store
  //   if (hits.length > 0) {
  //     // calls method to change page store where the best hit asset is located.
  //     changePage(hits[0].idpage);
  //   } else {
  //     changePage(1);
  //   }
  // };

  const sortedAssetList = sortAssetsList(state.crypto, state.page, state.mainFilter);
  // const toggleSearchBox = () => {
  //   const searchinput = document.getElementById('search-input');
  //   if (searchinput.classList.contains('hide')) {
  //     searchinput.classList.remove('hide');
  //     searchinput.classList.add('show');
  //   } else {
  //     searchinput.classList.remove('show');
  //     searchinput.classList.add('hide');
  //   }
  // };

  return (
    <>
      <div className="container vh-100">
        {/* <div className="as" id="search-input">
          <input type="text" value={input} list="keysearch" onChange={handleInputSearch} />
          <datalist id="keysearch">
            {
              ks.map((hint, id) => (
                <option key={`hint-${id * 2}`}>{hint.name}</option>
              ))
            }
          </datalist>
        </div> */}
        <div className="d-flex flex-row justify-content-around pt-2">
          <MainFilter
            changeMainFilter={changeMainFilter}
          />
          <h3 className="text-center text-muted">BiIt</h3>
          <CurrencyFilter
            state={state}
            changeCurrencyFilter={changeCurrencyFilter}
          />
          {/* <SearchIcon className="pt-1" onClick={toggleSearchBox} /> */}
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
