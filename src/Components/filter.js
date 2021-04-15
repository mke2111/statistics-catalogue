import React from 'react';
import PropTypes from 'prop-types';

const categories = ['crypto', 'forex', 'commodity', 'index', 'nyse'];

const getCategories = () => {
  const result = [];
  for (let i = 0; i < categories.length; i += 1) {
    result.push(
      <option key={categories[i]} value={categories[i]}>
        {categories[i]}
      </option>,
    );
  }
  return result;
};

const Filter = ({ updateFilter, filter }) => {
  const handleChange = (e) => {
    updateFilter(e.target.value);
  };
  return (
    <div id="search">
      <select onChange={handleChange} data-testid="categories" name="categories" id="categories" defaultValue={filter}>
        {getCategories()}
      </select>
    </div>
  );
};

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
