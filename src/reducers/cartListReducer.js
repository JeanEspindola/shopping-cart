import { CART_FETCH_DATA_SUCCESS, CART_CLEAR_SUCCESS, ITEM_DELETE_SUCCESS, ITEM_SUBMIT_SUCCESS } from '../utils/constants';
import initialState from './initialState';

export function cartListItems(state = initialState.list, action) {
  switch (action.type) {
    case CART_FETCH_DATA_SUCCESS:
      return action.list;
    case ITEM_DELETE_SUCCESS: {
      const newState = Object.assign([], state);
      const indexCartItemToDelete = state.findIndex(item => item.id === action.itemId);
      newState.splice(indexCartItemToDelete, 1);
      return newState;
    }
    case ITEM_SUBMIT_SUCCESS: {
      const newState = Object.assign([], state);
      action.item.id = 5;
      newState.push(action.item);
      return newState;
    }
    case CART_CLEAR_SUCCESS:
      return initialState.list;
    default:
      return state;
  }
}
