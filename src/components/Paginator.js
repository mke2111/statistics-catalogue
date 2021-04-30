import React from 'react';
import { PropTypes } from 'prop-types';
import { ReactComponent as PagePrev } from '../assets/icons/pagePrev.svg';
import { ReactComponent as PageNext } from '../assets/icons/pageNext.svg';

const Paginator = ({
  handlePaginator,
  page,
}) => (
  <div className="d-flex flex-row justify-content-between">
    <button
      type="button"
      href="#"
      className="pb-3 mx-3"
      onClick={() => handlePaginator('PREV')}
    >
      <PagePrev className="kk" />
    </button>
    <p>
      Next Pg
      {' '}
      {page}
    </p>
    <button
      type="button"
      href="#"
      className="mx-3"
      onClick={() => handlePaginator('NEXT')}
    >
      <PageNext className="kk" />
    </button>
  </div>
);

Paginator.propTypes = {
  handlePaginator: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Paginator;
