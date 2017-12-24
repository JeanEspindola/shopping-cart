import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './CartItem';

describe('CartItem', () => {
  const id = 1;
  const product = 'product1';
  const comments = 'comments1';
  const price = 5.00;
  const tax = 7;
  const total = 5.35;
  let Component;

  beforeEach(() => {
    Component = shallow(<CartItem
      id={id}
      product={product}
      comments={comments}
      price={price}
      tax={tax}
      total={total}
    />);
  });

  it('renders CartItem without crashing', () => {
    expect(Component.length).toBeTruthy();
  });
});
