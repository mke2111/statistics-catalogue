/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Filter from './filter';

const Main = ({ updateFilter, filter }) => (
  <>
    <div className="main d-flex flex-row justify-content-around py-4">
      <h3 className="te">Business</h3>
      <label htmlFor="filterSel">
        <Filter updateFilter={updateFilter} filter={filter} />
      </label>
    </div>
  </>
);

Main.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Main;
