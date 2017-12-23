import cartListService from '../utils/cartListService';
import { CART_FETCH_DATA_SUCCESS } from '../utils/constants';

export function loadCartList() {
  return function(dispatch) {
    return cartListService.getCartList().then(cartList => {
      console.log(cartList);
      dispatch(loadCartSuccess(cartList));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCartSuccess(list) {
  return {
    type: CART_FETCH_DATA_SUCCESS,
    list
  };
}
