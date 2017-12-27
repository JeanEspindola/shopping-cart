/*
* Cart Item Container Component.
*
* Connects the component with redux.
* Dispatches deleteCartItem action.
*
*/
import { connect } from 'react-redux';
import { deleteCartItem } from '../../actions/cartListAction';
import CartItem from './CartItem';

const mapDispatchToProps = dispatch => ({
  onDeleteItem: itemId => dispatch(deleteCartItem(itemId)),
});

export default connect(null, mapDispatchToProps)(CartItem);
