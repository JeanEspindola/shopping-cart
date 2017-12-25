/*
* Header Container Component.
*/
import { connect } from 'react-redux';
import { cleanUpCartList } from '../../actions/cartListAction';
import Header from './Header';

const mapStateToProps = state => ({
  list: state.cartListItems,
});

const mapDispatchToProps = dispatch => ({
  onClearCart: () => dispatch(cleanUpCartList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
