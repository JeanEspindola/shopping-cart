/*
* Cart Total Presentation Component.
*
* Renders the total values based on the props received.
*
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import cartListService from '../../utils/cartListService';
import './CartTotal.css';

let totalResults = 0;

class CartTotal extends Component {
  /*
  * Using this lifecycle method, I can check when the props were updated, then recalculate
  * the values so the component is re-rendered.
  * */
  componentWillReceiveProps(newProps) {
    if (newProps.list !== this.props.list) {
      totalResults = cartListService.getTotalValues(newProps.list);
    }
  }

  render() {
    if (totalResults === 0) {
      return (
        <div className="total empty">
          <Row className="total__net">
            <Col xs={6} id="total">Net Total</Col>
            <Col xs={6} className="total__values" id="value">0€</Col>
          </Row>
        </div>
      );
    }

    return (
      <div className="total">
        <Row className="total__net">
          <Col xs={6}>Net Total</Col>
          <Col xs={6} className="total__values">{totalResults.netTotal}€</Col>
        </Row>
        <hr className="total__divider" />
        <Row className="total__tax">
          <Col xs={6}>Tax</Col>
          <Col xs={6} className="total__values">{totalResults.taxTotal}€</Col>
        </Row>
        <Row className="total__tax__7">
          <Col xs={6}><Glyphicon glyph="arrow-right" /> 7%</Col>
          <Col xs={6} className="total__values">{totalResults.tax7}€</Col>
        </Row>
        <Row className="total__tax__19">
          <Col xs={6}><Glyphicon glyph="arrow-right" />19%</Col>
          <Col xs={6} className="total__values">{totalResults.tax19}€</Col>
        </Row>
        <hr className="total__divider" />
        <Row className="total__grand">
          <Col xs={6}>Grand Total</Col>
          <Col xs={6} className="total__values">{totalResults.grandTotal}€</Col>
        </Row>
      </div>
    );
  }
}

CartTotal.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CartTotal;
