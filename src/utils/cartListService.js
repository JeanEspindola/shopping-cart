/*
* Cart List Service:
*
* Functions available to use on the list. Separation of concerns.
*
* */
import 'whatwg-fetch';
import mathHelperService from './mathHelperService';
import cartListData from './cart.json';

const url = '/mock/cart';
const data = cartListData;

class CartListService {
  /*
  * Here I'm using fetchAPI to pretend I'm getting values from a real URL. In the then,
  * I'm returning the values I have on the mock json file. Later if data comes from the
  * WEB, I have only to make some changes here to make it work.
  * */
  static getCartList() {
    return fetch(
      url,
      {
        method: 'GET',
      },
    ).then(() => data)
      .catch(error => error);
  }

  /*
  * Takes the list and return an object with all values calculated for the CartTotal component.
  * */
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
