import React from 'react';
import CardTitle from './../card-title';

import { shallow } from 'enzyme';

const defaultProps = {
  text: 'Test Title',
}

const wrapComponent = (props = {}) => {
  return shallow(<CardTitle {...defaultProps} {...props} />);
};

describe('<CardTitle /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should render passed props', () => {
    const wrapper = wrapComponent();

    const text = wrapper.find('h3');

    expect(text.text()).toEqual(defaultProps.text);
  });
});
