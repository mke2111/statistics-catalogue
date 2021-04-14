import React, { useEffect } from 'react';
import '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchStock } from './Actions';

const App = ({ fetchStock }) => {
  useEffect(() => fetchStock(), []);
  return (
    <div className="app">
      <Routes />
    </div>
  );
};

App.propTypes = {
  fetchStock: PropTypes.func.isRequired,
};

export default connect(null, { fetchStock })(App);
