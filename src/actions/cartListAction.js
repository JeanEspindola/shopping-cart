import cartListService from '../utils/cartListService';
import { CART_FETCH_DATA_SUCCESS, ITEM_DELETE_SUCCESS } from '../utils/constants';
import initialState from '../reducers/initialState';

export function loadCartSuccess(list) {
  return {
    type: CART_FETCH_DATA_SUCCESS,
    list,
  };
}

export function deleteItemSuccess(itemId) {
  return {
    type: ITEM_DELETE_SUCCESS,
    itemId,
  };
}

export function loadCartList() {
  return dispatch => cartListService.getCartList().then((cartList) => {
    dispatch(loadCartSuccess(cartList));
  }).catch((error) => {
    throw (error);
  });
}

export function cleanUpCartList() {
  return dispatch => dispatch(loadCartSuccess(initialState.list));
}

export function deleteCartItem(itemId) {
  return dispatch => dispatch(deleteItemSuccess(itemId));
}
