import cartListService from './cartListService';

describe('cartListService', () => {
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

  it('get total values on an empty list', () => {
    expect(cartListService.getTotalValues([])).toEqual(0);
  });

  it('get total values on a full list', () => {
    const expectedResult = {
      netTotal: 130,
      grandTotal: 149.9,
      tax7: 2.8,
      tax19: 17.1,
      taxTotal: 19.9,
    };
    expect(cartListService.getTotalValues(list)).toEqual(expectedResult);
  });

  it('get total values on a partial list', () => {
    const expectedResult = {
      netTotal: 40,
      grandTotal: 42.8,
      tax7: 2.8,
      tax19: 0,
      taxTotal: 2.8,
    };
    expect(cartListService.getTotalValues(list7)).toEqual(expectedResult);
  });
});
