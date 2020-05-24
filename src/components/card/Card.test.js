import React from 'react';
import Card from './../card';

import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

const defaultProps = {
  tag: 'TOGA GROUP',
  longTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero id auctor.',
  thumbImg: '1001_thumb.jpg',
  slug: 'lorem-ipseum'
}

const wrapComponent = (props = {}) => {
  return shallow(<Card {...defaultProps} {...props} />);
};

describe('<CardImage /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should render passed props', () => {
    const wrapper = wrapComponent();

    const longTitle = wrapper.find('.card-container h3');
    expect(longTitle.text()).toEqual(defaultProps.longTitle);
    expect(wrapper.find(Link).props().to).toBe(`/${defaultProps.slug}`)
  });
});
