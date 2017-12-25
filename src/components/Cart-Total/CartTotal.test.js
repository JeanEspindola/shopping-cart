import React from 'react';
import { shallow } from 'enzyme';
import CartTotal from './CartTotal';

describe('CartTotal', () => {
  const list = [{ id: 1 }, { id: 2 }];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CartTotal list={list} />);
  });

  it('renders CartTotal without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
