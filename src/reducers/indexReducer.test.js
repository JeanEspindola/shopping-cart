import combinedReducer from './indexReducer';

describe('indexReducer', () => {
  const base = {
    cartListItems: [],
  };

  it('handle Reducer --> cartListItems', () => {
    expect(combinedReducer({ cartListItems: [] }, { undefined, type: {} })).toEqual(base);
  });
});
