import cartListItems from './cartListReducer';
import initialState from './initialState';

describe('cartListReducer', () => {
  let list;
  let state;

  beforeEach(() => {
    list = [
      {
        id: 1, product: 'a', price: 10, tax: 7,
      },
      {
        id: 2, product: 'b', price: 20, tax: 7,
      },
      {
        id: 3, product: 'c', price: 30, tax: 7,
      },
    ];
  });

  it('Reducer --> CART_CLEAR_SUCCESS', () => {
    state = list;
    state = cartListItems(state, { type: 'CART_CLEAR_SUCCESS' });
    expect(state).toEqual(initialState.list);
  });

  it('Reducer --> CART_FETCH_DATA_SUCCESS', () => {
    state = initialState.list;
    state = cartListItems(state, { type: 'CART_FETCH_DATA_SUCCESS', list });
    expect(state).toEqual(list);
  });

  it('Reducer --> ITEM_DELETE_SUCCESS', () => {
    const itemId = 1;
    const expectedList = [
      {
        id: 1, product: 'b', price: 20, tax: 7, totalItem: 21.4,
      },
      {
        id: 2, product: 'c', price: 30, tax: 7, totalItem: 32.1,
      },
    ];
    state = list;
    state = cartListItems(state, { type: 'ITEM_DELETE_SUCCESS', itemId });
    expect(state).toEqual(expectedList);
  });

  it('Reducer --> ITEM_SUBMIT_SUCCESS', () => {
    const item = { product: 'd', price: 100, tax: 19 };
    const currentList = [
      {
        id: 1, product: 'b', price: 20, tax: 7, totalItem: 21.4,
      },
      {
        id: 2, product: 'c', price: 30, tax: 7, totalItem: 32.1,
      },
    ];
    const expectedList = [
      {
        id: 1, product: 'b', price: 20, tax: 7, totalItem: 21.4,
      },
      {
        id: 2, product: 'c', price: 30, tax: 7, totalItem: 32.1,
      },
      {
        id: 3, product: 'd', price: 100, tax: 19, totalItem: 119,
      },
    ];

    state = currentList;
    state = cartListItems(state, { type: 'ITEM_SUBMIT_SUCCESS', item });
    expect(state).toEqual(expectedList);
  });

  it('Reducer --> DEFAULT', () => {
    state = list;
    state = cartListItems(state, { type: '' });
    expect(state).toEqual(list);
  });

  it('Reducer --> return initial state', () => {
    state = list;
    state = cartListItems(undefined, {});
    expect(state).toEqual(initialState.list);
  });
});
