import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './CartItem';

it('renders CartItem without crashing', () => {
  shallow(<CartItem />);
});
