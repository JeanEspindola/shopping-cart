import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, FormGroup, FormControl, Col, ControlLabel, InputGroup } from 'react-bootstrap';

class CartItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: '',
      comments: '',
      price: '',
      tax: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  saveProduct = () => {
    this.props.onSaveItem(this.state);
    this.props.onClose();
  };

  cancel = () => {
    this.setState({
      product: '',
      comments: '',
      price: '',
      tax: '',
    });
    this.props.onClose();
  };

  render() {
    const { product, comments, price, tax } = this.state;
    return (
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Product
              </Col>
              <Col sm={4}>
                <FormControl
                  type="text"
                  placeholder="Add your product"
                  value={product}
                  name="product"
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Comments
              </Col>
              <Col sm={10}>
                <FormControl
                  type="text"
                  placeholder="Add comments for the product"
                  value={comments}
                  name="comments"
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Price
              </Col>
              <Col sm={4}>
                <InputGroup>
                  <FormControl
                    type="number"
                    placeholder="Price"
                    value={price}
                    name="price"
                    onChange={this.onChange}
                  />
                  <InputGroup.Addon>$</InputGroup.Addon>
                </InputGroup>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Tax
              </Col>
              <Col sm={4}>
                <InputGroup>
                  <FormControl
                    type="number"
                    placeholder="Tax"
                    value={tax}
                    name="tax"
                    onChange={this.onChange}
                  />
                  <InputGroup.Addon>(7 or 19)%</InputGroup.Addon>
                </InputGroup>
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.saveProduct}>Save</Button>
          <Button onClick={this.cancel}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

CartItemForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onSaveItem: PropTypes.func.isRequired,
};

export default CartItemForm;