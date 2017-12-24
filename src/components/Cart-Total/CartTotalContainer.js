/*
* Cart Total Container Component.
*/
import { connect } from 'react-redux';
import CartTotal from './CartTotal';

const mapStateToProps = state => ({
  list: state.cartListItems,
});

export default connect(mapStateToProps, null)(CartTotal);
