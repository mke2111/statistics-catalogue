import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const Navbar = ({ handleOnSelect }) => (
  <>
    <nav>
      <h3 className="text-center col m-0 p-0"><a href="./">biit</a></h3>
      <Form inline>
        <Form.Control onChange={handleOnSelect} as="select" className="mr-sm-2">
          <option value="active">Most Active </option>
          <option value="gainers">Most Gainers </option>
          <option value="losers">Most Losers </option>
        </Form.Control>
        <Button variant="outline-success">Filter by category</Button>
      </Form>
    </nav>
  </>
);

Navbar.propTypes = {
  handleOnSelect: PropTypes.func.isRequired,
};

export default Navbar;
