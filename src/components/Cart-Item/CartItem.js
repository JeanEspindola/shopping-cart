/*
* Cart Item Presentation Component.
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    return (
      <tr>
        <th>{this.props.id}</th>
        <th>{this.props.product}</th>
        <th>{this.props.comments}</th>
        <th>{this.props.price} €</th>
        <th>{this.props.tax} %</th>
        <th>{this.props.total} €</th>
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
