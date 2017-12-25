/*
* Header Container Component.
*/
import { connect } from 'react-redux';
import { cleanUpCartList } from '../../actions/cartListAction';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
  onClearCart: () => dispatch(cleanUpCartList()),
});

export default connect(null, mapDispatchToProps)(Header);
