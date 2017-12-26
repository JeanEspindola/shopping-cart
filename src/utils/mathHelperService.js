class MathHelperService {
  static arrayTaxFilter(array, tax) {
    return array.filter(item => item.tax === tax);
  }

  static arrayTaxSummed(array, tax, value) {
    const filtered = this.arrayTaxFilter(array, tax);
    let total = 0;

    if (filtered.length > 0) {
      total = filtered.reduce((a, b) => ({ value: a[value] + b[value] })).value;
    }
    return total;
  }
}

export default MathHelperService;
