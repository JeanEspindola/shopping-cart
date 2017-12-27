/*
* Math Helper Service:
*
* Helper functions to make math calculations.
*
* */
class MathHelperService {
  /*
  * This is an aux function used to filter the original array list and return only the entries
  * regarding the correspondent tax. The function is more related to list than math, but I
  * ended up leaving it here.
  * */
  static arrayTaxFilter(array, tax) {
    return array.filter(item => item.tax === tax);
  }

  /*
  * After filtering the list, I used the array.reduce to sum all prices values for a given
  * tax, so these values will be used later to calculate the total amount per category.
  * */
  static arrayTaxSummed(array, tax, value) {
    const filtered = this.arrayTaxFilter(array, tax);
    return filtered.reduce((a, b) => (a + b[value]), 0);
  }

  /*
  * Calculates the total value of an item
  * */
  static getTotalItem(value, tax) {
    return +(value + ((value * tax) / 100)).toFixed(2);
  }
}

export default MathHelperService;
