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
    const results = {};

    const totalTax7 = mathHelperService.arrayTaxSummed(list, 7, 'price').total;
    const totalTax19 = mathHelperService.arrayTaxSummed(list, 19, 'price').total;

    results.netTotal = totalTax7 + totalTax19;
    results.grandTotal = +(totalTax7 * 1.07).toFixed(2) + +(totalTax19 * 1.19).toFixed(2);
    results.tax7 = +(totalTax7 * 0.07).toFixed(2);
    results.tax19 = +(totalTax19 * 0.19).toFixed(2);
    results.taxTotal = results.tax7 + results.tax19;

    return results;
  }
}

export default CartListService;
