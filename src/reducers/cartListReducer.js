import { CART_FETCH_DATA_SUCCESS, ITEM_DELETE_SUCCESS } from '../utils/constants';
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
    default:
      return state;
  }
}
