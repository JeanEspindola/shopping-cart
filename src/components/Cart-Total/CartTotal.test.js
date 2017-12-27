import React from 'react';
import { shallow } from 'enzyme';
import CartTotal from './CartTotal';

describe('CartTotal', () => {
  let list;
  let wrapper;

  it('renders CartTotal without crashing', () => {
    list = [];
    wrapper = shallow(<CartTotal list={list} />);

    expect(wrapper.length).toEqual(1);
  });
});
