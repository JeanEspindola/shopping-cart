import 'whatwg-fetch';
import cartListData from './cart.json';

const url = '/mock/cart';
const data = cartListData;

class CartListService {
  static getCartList() {
    return fetch(
      url,
      {
        method: 'GET',
      },
    ).then(() => data)
      .catch(error => error);
  }
}

export default CartListService;
