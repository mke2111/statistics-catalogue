/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './DashBoard';
import { updateApiRenderList } from '../actions/index';
import AssetDetailsSafe from './AssetDetailsSafe';
import '../index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { renderApiAssetsLists, currentCryptoList, currencyFilter } = props;

    this.currencyFilter = currencyFilter;
    this.currentCryptoList = currentCryptoList;
    this.renderApiAssetsLists = renderApiAssetsLists;
    this.renderApiAssetsLists = this.renderApiAssetsLists.bind(this);
  }

  componentDidMount() {
    this.renderApiAssetsLists();
    this.assetsListUpdateInterval = setInterval(this.fetchApi.bind(this), 600000);
  }

  componentWillUnmount() {
    clearInterval(this.assetsListUpdateInterval);
  }

  fetchApi() {
    this.renderApiAssetsLists();
  }

  render() {
    return (
      <Router>
        <div className="app-container m-auto h-100">
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route
              path="/asset/:id"
              render={(props) => (
                <AssetDetailsSafe
                  currency={this.currencyFilter}
                  data={this.currentCryptoList}
                  {...props}
                />
              )}
            />
            <Route
              path={'/*'}
              render={() => <Redirect to="/" />}
            />

          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  renderApiAssetsLists: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  renderApiAssetsLists: () => dispatch(updateApiRenderList()),
});
const mapStateToProps = (state) => ({
  currentCryptoList: state.crypto,
  currencyFilter: state.currencyFilter,
});

App.propTypes = {
  currencyFilter: PropTypes.string.isRequired,
  currentCryptoList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
