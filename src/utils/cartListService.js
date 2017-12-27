import 'whatwg-fetch';
import mathHelperService from './mathHelperService';
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

  static getTotalValues(list) {
    let retResult = 0;

    if (list.length > 0) {
      const results = {};
      const totalTax7 = mathHelperService.arrayTaxSummed(list, 7, 'price');
      const totalTax19 = mathHelperService.arrayTaxSummed(list, 19, 'price');

      results.netTotal = totalTax7 + totalTax19;
      results.tax7 = +(totalTax7 * 0.07).toFixed(2);
      results.tax19 = +(totalTax19 * 0.19).toFixed(2);
      results.taxTotal = +(results.tax7 + results.tax19).toFixed(2);
      results.grandTotal = results.netTotal + results.taxTotal;
      retResult = results;
    }

    return retResult;
  }
}

export default CartListService;
