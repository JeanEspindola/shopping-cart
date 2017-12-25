class MathHelperService {
  static arrayTaxFilter(array, tax) {
    return array.filter(function (item) {
      return item.tax === tax;
    });
  }

  static arrayTaxSummed(array, tax, value) {
    const filtered = this.arrayTaxFilter(array, tax);
    return filtered.reduce((a, b) => ({ total: a[value] + b[value] }));
  }
}

export default MathHelperService;
