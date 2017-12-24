/*
* Header Container Component.
*/
import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  list: state.cartListItems,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
