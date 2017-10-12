import React from 'react';
import FormInput from './FormInput';
import { Form, Label, Input } from 'semantic-ui-react';

let props;

beforeEach(() => {
  props = {
    input: {
      onChange: jest.fn(),
      name: 'name',
      onBlur: jest.fn(),
      value: 'value'
    },
    meta: { error: undefined, touched: false }
  };
});

it('should render a form field input which calls onChange/onBlur from props', () => {
  const wrapper = shallow(<FormInput {...props} />);

  expect(wrapper.find(Form.Field).length).toEqual(1);
  expect(wrapper.find(Input).length).toEqual(1);
  expect(wrapper.find(Label).length).toEqual(0);
  wrapper.find(Input).simulate('focus');
  wrapper.find(Input).simulate('change', { target: { value: '' } });
  wrapper.find(Input).simulate('blur');
  expect(props.input.onChange).toHaveBeenCalled();
  expect(props.input.onBlur).toHaveBeenCalled();
});

it('should render a form field input with error message if touched and has error', () => {
  const metaProp = { error: 'Required', touched: true };
  const wrapper = mount(<FormInput {...props} meta={metaProp} />);

  expect(wrapper.find(Form.Field).length).toEqual(1);
  expect(wrapper.find(Input).length).toEqual(1);
  expect(wrapper.find(Label).length).toEqual(1);
  expect(wrapper.find(Label).text()).toEqual(metaProp.error);
});

it('should render a simple value string if read only', () => {
  const wrapper = shallow(<FormInput {...props} readOnly />);

  expect(wrapper.find(Form.Field).length).toEqual(0);
  expect(wrapper.find(Input).length).toEqual(0);
  expect(wrapper.find(Label).length).toEqual(0);
  expect(wrapper.find('.read-only').text()).toEqual(props.input.value);
});
