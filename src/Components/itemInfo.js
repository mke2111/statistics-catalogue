import React from 'react';
import PropTypes from 'prop-types';

const ItemInfo = ({ profile }) => (
  <>
    <section className="d-flex flex-column justify-content-between col2">
      {/* <h3 className="text-center col m-0 p-0"><a href="./">biit</a></h3> */}
      <p>YEsssssssssss</p>
      <div className="grid-">
        <p>
          Symbol
          {profile.symbol}
        </p>
        <p>
          price
          {profile.price}
        </p>
        <p>{profile.companyName}</p>
        <p>{profile.description}</p>
      </div>
    </section>
  </>
);

ItemInfo.propTypes = {
  profile: PropTypes.shape({
    symbol: PropTypes.string,
    price: PropTypes.number,
    // changes: PropTypes.number,
    companyName: PropTypes.string,
    // industry: PropTypes.string,
    // website: PropTypes.string,
    description: PropTypes.string,
    // image: PropTypes.string,
  }),
};

ItemInfo.defaultProps = {
  profile: [],
};

export default ItemInfo;
