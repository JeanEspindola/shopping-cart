import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CartItem from './CartItem';

describe('CartItem', () => {
  const item = {
    id: 1,
    product: 'product1',
    comments: 'comments1',
    price: 5.00,
    tax: 7,
    total: 5.35,
  };
  const mockDeleteItem = jest.fn();

  let Component;
  let wrapper;

  beforeEach(() => {
    Component = shallow(<CartItem
      id={item.id}
      product={item.product}
      comments={item.comments}
      price={item.price}
      tax={item.tax}
      total={item.total}
      onDeleteItem={mockDeleteItem}
    />);

    wrapper = mount(<CartItem
      id={item.id}
      product={item.product}
      comments={item.comments}
      price={item.price}
      tax={item.tax}
      total={item.total}
      onDeleteItem={mockDeleteItem}
    />);
  });

  it('renders CartItem without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });

  it('should call onDeleteItem when clicking on delete button', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(mockDeleteItem).toHaveBeenCalled();
  });
});
