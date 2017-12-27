import listHelperService from './listHelperService';

describe('mathHelperService', () => {
  const list = [
    { product: 'a', price: '10', tax: '7' },
    { product: 'b', price: '20', tax: '7' },
    { product: 'c', price: '30', tax: '7' },
  ];

  it('prepare the list adding id and totalItem', () => {
    const expectedList = [
      {
        id: 1, product: 'a', price: '10', tax: '7', totalItem: 10.7,
      },
      {
        id: 2, product: 'b', price: '20', tax: '7', totalItem: 21.4,
      },
      {
        id: 3, product: 'c', price: '30', tax: '7', totalItem: 32.1,
      },
    ];
    expect(listHelperService.listPrepare(list)).toEqual(expectedList);
  });

  it('remove the id element from the objects', () => {
    const smallList = [
      { id: 1, product: 'a' },
      { id: 2, product: 'b' },
      { id: 3, product: 'c' },
    ];

    const result = [
      { product: 'a' },
      { product: 'b' },
      { product: 'c' },
    ];
    expect(listHelperService.arrayRemoveId(smallList)).toEqual(result);
  });
});
