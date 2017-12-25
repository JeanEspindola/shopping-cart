/*
* Cart List Presentation Component.
*/
import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CartItem from '../Cart-Item/CartitemContainer';
import './CartList.css';

class CartList extends Component {
  render() {
    if (this.props.list.length === 0) {
      return (
        <p>There are no items in your cart.</p>
      );
    }

    return (
      <Row className="cartlist">
        <Col xs={12}>
          <Table className="cartlist__table">
            <thead className="cartlist__table__header">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Comments</th>
                <th>Price</th>
                <th>Tax</th>
                <th className="cartlist__table__header__total">Total Item</th>
                <th className="cartlist__table__header__actions" />
              </tr>
            </thead>
            <tbody className="cartlist__table__body">
              {this.props.list.map(item =>
                (<CartItem
                  key={item.id}
                  id={item.id}
                  product={item.product}
                  comments={item.comments}
                  price={item.price}
                  tax={item.tax}
                  total={item.totalItem}
                />))
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

CartList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default CartList;
