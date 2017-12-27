/*
* Cart List Container Component.
*
* Connects the component with redux.
* Maps the state.list to the props.
*
*/
import { connect } from 'react-redux';
import CartList from './CartList';

const mapStateToProps = state => ({
  list: state.cartListItems,
});

export default connect(mapStateToProps, null)(CartList);
