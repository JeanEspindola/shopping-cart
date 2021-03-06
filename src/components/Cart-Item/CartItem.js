/*
* Cart Item Presentation Component.
*
* Renders each element of the list with buttons for actions.
*
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';
import './CartItem.css';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(e) {
    e.preventDefault();
    this.props.onDeleteItem(this.props.id);
  }

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
          <Button id="test" bsStyle="danger" bsSize="xsmall" onClick={this.deleteItem}>
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
  onDeleteItem: PropTypes.func.isRequired,
};

export default CartItem;
