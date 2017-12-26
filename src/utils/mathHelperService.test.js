import mathHelperService from './mathHelperService';

describe('mathHelperService', () => {
  const list = [
    { id: 1, tax: 7, price: 20 },
    { id: 2, tax: 7, price: 20 },
    { id: 3, tax: 19, price: 30 },
    { id: 4, tax: 19, price: 30 },
    { id: 5, tax: 19, price: 30 },
  ];

  const list7 = [
    { id: 1, tax: 7, price: 20 },
    { id: 2, tax: 7, price: 20 },
  ];

  it('filters array per tax value', () => {
    expect(mathHelperService.arrayTaxFilter(list, 7)).toEqual(list7);
  });

  it('filters array with no entry for given tax', () => {
    expect(mathHelperService.arrayTaxFilter(list7, 19)).toEqual([]);
  });

  it('sums total prices on a list without tax entry', () => {
    expect(mathHelperService.arrayTaxSummed(list7, 19, 'price')).toEqual(0);
  });

  it('sums total prices per tax', () => {
    expect(mathHelperService.arrayTaxSummed(list, 7, 'price')).toEqual(40);
  });
});
