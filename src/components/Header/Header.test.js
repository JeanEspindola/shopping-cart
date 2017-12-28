import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from './Header';

describe('Header', () => {
  const mockClearCart = jest.fn;

  let Component;

  beforeEach(() => {
    Component = shallow(<Header
      onClearCart={mockClearCart}
    />);
  });

  it('renders Header without crashing', () => {
    expect(Component.length).toBeTruthy();
    expect(shallowToJson(Component)).toMatchSnapshot();
  });
});
