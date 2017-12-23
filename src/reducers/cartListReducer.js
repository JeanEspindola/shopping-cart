import { CART_FETCH_DATA_SUCCESS } from '../utils/constants';
import initialState from './initialState';

export function cartListItems(state = initialState.list, action) {
  switch (action.type) {
    case CART_FETCH_DATA_SUCCESS:
      return action.list;
    default:
      return state;
  }
}
