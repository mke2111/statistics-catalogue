import React from 'react';
import { PropTypes } from 'prop-types';
import mainFilterCat from '../config/appConfig';

const MainFilter = ({
  changeMainFilter,
}) => {
  const handleChange = (e) => {
    changeMainFilter(e.target.value);
  };

  return (

    <div className="s">
      <select className="categories" onChange={handleChange}>
        {
          mainFilterCat.map((cat, id) => (
            <option key={`opt_${id * 2}`} value={cat.api}>{cat.key}</option>
          ))
        }
      </select>
    </div>
  );
};

MainFilter.propTypes = {
  changeMainFilter: PropTypes.func.isRequired,
};

export default MainFilter;
