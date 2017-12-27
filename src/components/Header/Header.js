/*
* Header Container Component.
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItemForm from '../Cart-Item-Form/CartItemFormContainer';
import { Row, Col, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return(
      <div>
        <Row className="header">
          <Col xs={6}>
            <span className="header__title">
                Your Cart
            </span>
          </Col>
          <Col xs={6}>
            <ButtonToolbar className="header__toolbar">
              <Button bsStyle="danger" onClick={this.props.onClearCart}>
                <Glyphicon glyph="trash" />
                Clear Cart
              </Button>
              <Button bsStyle="primary" onClick={this.toggleModal}>
                <Glyphicon glyph="plus" />
                Add New Product
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>
        <CartItemForm
          show={this.state.isOpen}
          onClose={this.toggleModal}
          title='Add Product'
        >
        </CartItemForm>
      </div>
    );
  }
}

Header.propTypes = {
  onClearCart: PropTypes.func.isRequired,
};

export default Header;
