/*
* Cart Item Presentation Component.
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';
import './CartItem.css';

class CartItem extends Component {
  render() {
    return (
      <tr className="item">
        <td>{this.props.id}</td>
        <td>{this.props.product}</td>
        <td>{this.props.comments}</td>
        <td>{this.props.price}€</td>
        <td>{this.props.tax}%</td>
        <td className="item__total">{this.props.total}€</td>
        <td className="item__actions">
          <Button bsStyle="warning" bsSize="xsmall">
            <Glyphicon glyph="pencil" />
          </Button>
          &nbsp;
          <Button bsStyle="danger" bsSize="xsmall">
            <Glyphicon glyph="remove" />
          </Button>
        </td>
      </tr>
    );
  }
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default CartItem;
