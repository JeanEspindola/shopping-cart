/*
* Cart Item Form Container Component.
*
* Connects the component with redux.
* Dispatches addCartItem action.
*
*/
import { connect } from 'react-redux';
import { addCartItem } from '../../actions/cartListAction';
import CartItemForm from './CartItemForm';

const mapDispatchToProps = dispatch => ({
  onSaveItem: item => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItemForm);
