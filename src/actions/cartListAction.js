import cartListService from '../utils/cartListService';
import { CART_FETCH_DATA_SUCCESS, CART_CLEAR_SUCCESS, ITEM_DELETE_SUCCESS, ITEM_SUBMIT_SUCCESS } from '../utils/constants';

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

export function clearCartSuccess() {
  return {
    type: CART_CLEAR_SUCCESS,
  };
}

export function addCartItemSuccess(item) {
  return {
    type: ITEM_SUBMIT_SUCCESS,
    item,
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
  return dispatch => dispatch(clearCartSuccess());
}

export function addCartItem(item) {
  return dispatch => dispatch(addCartItemSuccess(item));
}

export function deleteCartItem(itemId) {
  return dispatch => dispatch(deleteItemSuccess(itemId));
}
