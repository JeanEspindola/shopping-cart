/*
* Cart List Presentation Component.
*
* Renders the list and passes values to CartItem, child component.
*
*/
import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CartItem from '../Cart-Item/CartitemContainer';
import './CartList.css';

const CartList = ({ list }) => {
  if (list.length === 0) {
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
            {list.map(item =>
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
};

CartList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CartList;
