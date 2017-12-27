import { loadCartSuccess, deleteItemSuccess, clearCartSuccess, cleanUpCartList, deleteCartItem, addCartItemSuccess, addCartItem } from './cartListAction';

describe('cartListAction', () => {
  it('Action --> CART_FETCH_DATA_SUCCESS', () => {
    const list = [{ product: 'a' }, { product: 'b' }, { product: 'c' }];
    expect(loadCartSuccess(list)).toEqual({ type: 'CART_FETCH_DATA_SUCCESS', list });
  });

  it('Action --> ITEM_DELETE_SUCCESS', () => {
    const itemId = 1;
    expect(deleteItemSuccess(itemId)).toEqual({ type: 'ITEM_DELETE_SUCCESS', itemId });
  });

  it('Action --> CART_CLEAR_SUCCESS', () => {
    expect(clearCartSuccess()).toEqual({ type: 'CART_CLEAR_SUCCESS' });
  });

  it('Action --> ITEM_SUBMIT_SUCCESS', () => {
    const item = { product: 'a' };
    expect(addCartItemSuccess(item)).toEqual({ type: 'ITEM_SUBMIT_SUCCESS', item });
  });

  it('Action --> cleanUpCartList', () => {
    const fn = cleanUpCartList();
    const dispatch = jest.fn();
    const getState = () => ({ list: [{ product: 'a' }, { product: 'b' }, { product: 'c' }] });
    fn(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({ type: 'CART_CLEAR_SUCCESS' });
  });

  it('Action --> deleteCartItem', () => {
    const itemId = 1;
    const fn = deleteCartItem(itemId);
    const dispatch = jest.fn();
    const getState = () => ({ list: [{ product: 'a' }, { product: 'b' }, { product: 'c' }] });
    fn(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({ type: 'ITEM_DELETE_SUCCESS', itemId });
  });

  it('Action --> addCartItem', () => {
    const item = { product: 'd' };
    const fn = addCartItem(item);
    const dispatch = jest.fn();
    const getState = () => ({ list: [{ product: 'a' }, { product: 'b' }, { product: 'c' }] });
    fn(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({ type: 'ITEM_SUBMIT_SUCCESS', item });
  });
});
