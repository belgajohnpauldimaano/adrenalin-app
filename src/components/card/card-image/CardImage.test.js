import React from 'react';
import CardImage from './../card-image';

import { shallow } from 'enzyme';

const defaultProps = {
  tag: 'Test tag',
  thumbImg: '1001_thumb.jpg'
}

const wrapComponent = (props = {}) => {
  return shallow(<CardImage {...defaultProps} {...props} />);
};

describe('<CardImage /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should render passed props', () => {
    const wrapper = wrapComponent();

    const cardImage = wrapper.find('div.card-image');
    const tag = wrapper.find('div.card-image div');

    expect(tag.text()).toEqual(defaultProps.tag);
    expect(cardImage).toBeDefined();
  });
});
