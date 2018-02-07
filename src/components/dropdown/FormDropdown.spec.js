import React from 'react';
import { shallow } from 'enzyme';
import FormDropdown, { ReduxDropdown } from './FormDropdown';
import { Form, Dropdown, Label } from 'semantic-ui-react';

let props;

beforeEach(() => {
  props = {
    options: [{ text: 'a', value: 'a' }, { text: 'b', value: 'b' }],
    input: {
      onChange: jest.fn(),
      name: 'name',
      onBlur: jest.fn(),
      value: 'a'
    },
    meta: { error: undefined, touched: false }
  };
});

it('should render a form field dropdown which calls onChange/onBlur from props', () => {
  const wrapper = shallow(<FormDropdown {...props} />);

  expect(wrapper.find(Form.Field).length).toEqual(1);
  expect(wrapper.find(ReduxDropdown).length).toEqual(1);
  expect(wrapper.find(Label).length).toEqual(0);
  wrapper.find(ReduxDropdown).simulate('focus');
  wrapper
    .find(ReduxDropdown)
    .simulate(
      'change',
      {},
      { value: props.input.value, options: props.options }
    );
  wrapper.find(ReduxDropdown).simulate('blur', { preventDefault: jest.fn() });
  expect(props.input.onChange).toHaveBeenCalledWith('a');
  expect(props.input.onBlur).toHaveBeenCalled();
});

it('should save multiple values on change', () => {
  const inputProp = {
    onChange: jest.fn(),
    name: 'name',
    onBlur: jest.fn(),
    value: ['a', 'b']
  };

  const wrapper = shallow(
    <FormDropdown {...props} multiple={true} input={inputProp} />
  );

  wrapper
    .find(ReduxDropdown)
    .simulate('change', {}, { value: inputProp.value, options: props.options });
  expect(inputProp.onChange).toHaveBeenCalledWith(['a', 'b']);
});

it('should render a simple value string if read only', () => {
  const wrapper = shallow(<FormDropdown {...props} readOnly />);

  expect(wrapper.find(Form.Field).length).toEqual(0);
  expect(wrapper.find(ReduxDropdown).length).toEqual(0);
  expect(wrapper.find(Label).length).toEqual(0);
  expect(wrapper.find('.read-only').text()).toEqual(props.input.value);
});

it('should render a form field input with error message if touched and has error', () => {
  const metaProp = { error: 'Required', touched: true };
  const wrapper = shallow(<FormDropdown {...props} meta={metaProp} />);

  expect(wrapper.find(Form.Field).length).toEqual(1);
  expect(wrapper.find(ReduxDropdown).length).toEqual(1);
  expect(wrapper.find(Label).length).toEqual(1);
  expect(wrapper.find(Label).props().children).toEqual(metaProp.error);
});
