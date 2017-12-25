/*
* Header Container Component.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import './Header.css';

const Header = ({ onClearCart }) => (
  <Row className="header">
    <Col xs={6}>
      <span className="header__title">
          Your Cart
      </span>
    </Col>
    <Col xs={6}>
      <ButtonToolbar className="header__toolbar">
        <Button bsStyle="danger" onClick={onClearCart}>
          <Glyphicon glyph="trash" /> Clear Cart
        </Button>
        <Button bsStyle="primary"><Glyphicon glyph="plus" /> Add New Product</Button>
      </ButtonToolbar>
    </Col>
  </Row>
);

Header.propTypes = {
  onClearCart: PropTypes.func.isRequired,
};

export default Header;
