import React from 'react';
import { DeatilCardImage } from './../detail-image-card';

import { shallow } from 'enzyme';

const defaultProps = {
  tag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: '1001_thumb.jpg'
}

const wrapComponent = (props = {}) => {
  return shallow(<DeatilCardImage {...defaultProps} {...props} />);
};

describe('<DeatilCardImage /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should render passed props', () => {
    const wrapper = wrapComponent();

    const tag = wrapper.find('.tag-container div');

    expect(tag.text()).toEqual(defaultProps.tag);
  });
});
