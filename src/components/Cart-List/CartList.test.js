import React from 'react';
import { shallow } from 'enzyme';
import CartList from './CartList';

describe('CartList', () => {
  let list;
  let Component;

  it('renders CartList without crashing', () => {
    list = [{ id: 1 }, { id: 2 }];
    Component = shallow(<CartList list={list} />);

    expect(Component.length).toBeTruthy();
  });

  it('renders CartList with list props empty', () => {
    const text = 'There are no items in your cart.';
    list = [];
    Component = shallow(<CartList list={list} />);

    expect(Component.find('p').text()).toBe(text);
  });
});
