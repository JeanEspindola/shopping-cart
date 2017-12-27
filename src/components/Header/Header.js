/*
* Header Presentation Component.
*
* Renders the Header with clear cart button.
* Injects the CartForm as child component and holds the control of the modal.
*
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import CartItemForm from '../Cart-Item-Form/CartItemFormContainer';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
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
        <CartItemForm show={this.state.isOpen} onClose={this.toggleModal} title="Add Product" />
      </div>
    );
  }
}

Header.propTypes = {
  onClearCart: PropTypes.func.isRequired,
};

export default Header;
