import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

const defaultProps = {}

const wrapComponent = (props = {}) => {
  return shallow(<App {...defaultProps} {...props} />);
};

describe('<App /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });
});
