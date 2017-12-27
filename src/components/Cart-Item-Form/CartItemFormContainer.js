import { connect } from 'react-redux';
import { addCartItem } from '../../actions/cartListAction';
import CartItemForm from './CartItemForm';

const mapDispatchToProps = dispatch => ({
  onSaveItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItemForm);
