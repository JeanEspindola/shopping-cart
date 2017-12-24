/*
* Cart List Container Component.
*/
import { connect } from 'react-redux';
import CartList from './CartList';

const mapStateToProps = state => ({
  list: state.cartListItems,
});

export default connect(mapStateToProps, null)(CartList);
