import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CartItemForm from './CartItemForm';

describe('CartItem', () => {
  const mockOnClose = jest.fn;
  const mockOnSaveItem = jest.fn;

  let Component;

  beforeEach(() => {
    Component = shallow(<CartItemForm
      show
      title="Add product"
      onClose={mockOnClose}
      onSaveItem={mockOnSaveItem}
    />);
  });

  it('renders CartItemForm without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });
});
