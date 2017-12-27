/*
* Index Reducer:
*
* Used combinedReducer here. It helps to maintain the application once it scales and
* there are many different actions/reducers available.
*
* */
import { combineReducers } from 'redux';
import cartListItems from './cartListReducer';

export default combineReducers({
  cartListItems,
});
