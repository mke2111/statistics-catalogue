/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { PropTypes } from 'prop-types';
import { ReactComponent as PagePrev } from '../assets/icons/pagePrev.svg';
import { ReactComponent as PageNext } from '../assets/icons/pageNext.svg';

const Paginator = ({
  handlePaginator,
  page,
}) => (
  <div className="d-flex flex-row justify-content-between">
    <a
      role="button"
      href="#"
      className="pb-3 mx-5"
      onClick={() => handlePaginator('PREV')}
    >
      <PagePrev className="kk" />
    </a>
    <p>
      Next Page
      {' '}
      {page}
    </p>
    <a
      role="button"
      href="#"
      className="mx-5"
      onClick={() => handlePaginator('NEXT')}
    >
      <PageNext className="kk" />
    </a>
  </div>
);

Paginator.propTypes = {
  handlePaginator: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Paginator;
