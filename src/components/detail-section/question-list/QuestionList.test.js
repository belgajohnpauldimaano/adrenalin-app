import React from 'react';
import { QuestionList } from './../question-list';

import { shallow } from 'enzyme';

const defaultProps = {
  items: [
    {
        "title":"Content title 1",
        "date": new Date("Fri May 11 1984 13:44:27 GMT+0000 (UTC)"),
        "text": "eiusmod sint esse est velit et nostrud quis mollit elit nostrud est proident reprehenderit ea ut fugiat sunt aliqua consectetur dolor irure ut aliqua voluptate"
    }
  ]
}

const wrapComponent = (props = {}) => {
  return shallow(<QuestionList {...defaultProps} {...props} />);
};

describe('<QuestionList /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });
});
