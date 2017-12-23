import { connect } from 'react-redux';
import CartList from './CartList';
//import { listFetchData } from '../../actions/linkListActions';

const mapStateToProps = state => ({
  /*
  items: state.listItems,
  isLoading: state.listIsLoading,
  */
});

const mapDispatchToProps = dispatch => ({
  //fetchData: () => dispatch(listFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
