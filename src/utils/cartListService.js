import 'whatwg-fetch';
import cartListData from './cart';

const jsonPath = '/mock/cart';
const data = cartListData;

class CartListService {
  static getCartList() {
    return fetch(
      jsonPath,
      {
        method: 'GET'
      }).then(response => {
        return data;
      }).catch(error => {
        console.log('testeerro');
        return error;
      });
  }
}

export default CartListService;
