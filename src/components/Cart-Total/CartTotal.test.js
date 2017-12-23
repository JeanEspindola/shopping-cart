import React from 'react';
import { shallow } from 'enzyme';
import CartTotal from './CartTotal';

it('renders CartTotal without crashing', () => {
  shallow(<CartTotal />);
});
