/*
* Cart List Presentation Component.
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../Cart-Item/CartitemContainer';

class CartList extends Component {
  render() {

    if (this.props.list.length === 0) {
      return (
        <p>There are no items in your cart.</p>
      );
    }

    return (
      <div>
        <ul>
          {this.props.list.map(item =>
            <li key={item.id}>
              {item.product}
            </li>)}
        </ul>
        <CartItem />
      </div>
    );
  }
}

CartList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default CartList;
