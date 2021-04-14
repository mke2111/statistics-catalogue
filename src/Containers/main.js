// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// const Main = ({ stock }) => (
//   <>
//     <div className="main">
//       <p className="te">{stock.id}</p>
//       <label htmlFor="filterSel">
//         Filter
//         <select>
//           <option key="si" value="si">Select</option>
//         </select>
//       </label>
//     </div>
//   </>
// );

// Main.propTypes = {
//   stock: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };

// const mapStateToProps = (state) => ({ stock: state.stock });

// export default connect(mapStateToProps, null)(Main);
