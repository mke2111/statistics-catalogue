import React from 'react';
import PropTypes from 'prop-types';

const Stock = ({ data }) => (
  // <a href={`/show/${data.id}`}>
  <a href="./">
    {/* <img data-testid="image" src={data.image} alt={data.title} /> */}
    <p>{data.name}</p>
  </a>
);

Stock.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Stock;
