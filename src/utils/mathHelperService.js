class MathHelperService {
  static arrayTaxFilter(array, tax) {
    return array.filter(item => item.tax === tax);
  }

  static arrayTaxSummed(array, tax, value) {
    const filtered = this.arrayTaxFilter(array, tax);
    return filtered.reduce((a, b) => (a + b[value]), 0);
  }

  static getTotalItem(value, tax) {
    return +(value + ((value * tax) / 100)).toFixed(2);
  }
}

export default MathHelperService;
