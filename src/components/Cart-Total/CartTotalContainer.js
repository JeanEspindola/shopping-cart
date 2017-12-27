/*
* Cart Total Container Component.
*
* Connects the component with redux.
* Maps the state.list to the props.
*
*/
import { connect } from 'react-redux';
import CartTotal from './CartTotal';

const mapStateToProps = state => ({
  list: state.cartListItems,
});

export default connect(mapStateToProps, null)(CartTotal);
