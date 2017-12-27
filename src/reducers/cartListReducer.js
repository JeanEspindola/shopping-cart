/*
* Cart List Reducer:
*
* Performs transformations and return the values to the state based on actions dispatched.
* The application has 4 basic actions: add item, delete item, load/reload the list and
* clear the list.
*
* */
import { CART_FETCH_DATA_SUCCESS, CART_CLEAR_SUCCESS, ITEM_DELETE_SUCCESS, ITEM_SUBMIT_SUCCESS } from '../utils/constants';
import initialState from './initialState';
import listHelperService from '../utils/listHelperService';

function cartListItems(state = initialState.list, action) {
  switch (action.type) {
    case CART_FETCH_DATA_SUCCESS: {
      return listHelperService.listPrepare(action.list);
    }
    case ITEM_DELETE_SUCCESS: {
      let newState = Object.assign([], state);
      const indexCartItemToDelete = state.findIndex(item => item.id === action.itemId);
      newState.splice(indexCartItemToDelete, 1);
      newState = listHelperService.listPrepare(newState);
      return newState;
    }
    case ITEM_SUBMIT_SUCCESS: {
      let newState = Object.assign([], state);
      newState.push(action.item);
      newState = listHelperService.listPrepare(newState);
      return newState;
    }
    case CART_CLEAR_SUCCESS:
      return initialState.list;
    default:
      return state;
  }
}

export default cartListItems;
