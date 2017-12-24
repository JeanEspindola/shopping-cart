import cartListService from '../utils/cartListService';
import { CART_FETCH_DATA_SUCCESS } from '../utils/constants';

export function loadCartSuccess(list) {
  return {
    type: CART_FETCH_DATA_SUCCESS,
    list,
  };
}

export function loadCartList() {
  return (dispatch) => cartListService.getCartList().then((cartList) => {
    dispatch(loadCartSuccess(cartList));
  }).catch((error) => {
    throw (error);
  });
}
