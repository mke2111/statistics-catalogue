import React, { useEffect } from 'react';
import '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchStocks from './Actions';

const App = ({ fetchStocks }) => {
  useEffect(() => fetchStocks(), []);
  return (
    <div className="app">
      <Routes />
    </div>
  );
};

App.propTypes = {
  fetchStocks: PropTypes.func.isRequired,
};

export default connect(null, { fetchStocks })(App);
