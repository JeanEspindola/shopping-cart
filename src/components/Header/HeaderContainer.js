/*
* Header Container Component.
*
* Connects the component with redux.
* Dispatches the cleanUpCartList action.
*
*/
import { connect } from 'react-redux';
import { cleanUpCartList } from '../../actions/cartListAction';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
  onClearCart: () => dispatch(cleanUpCartList()),
});

export default connect(null, mapDispatchToProps)(Header);
