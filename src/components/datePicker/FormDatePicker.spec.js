import React from 'react';
import { shallow } from 'enzyme';
import FormDatePicker from './FormDatePicker';
import { Form } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

let props;

beforeEach(() => {
  props = {
    input: {
      onChange: jest.fn(),
      name: 'name',
      onBlur: jest.fn(),
      value: ''
    },
    meta: { error: undefined, touched: false }
  };
});

it('should render a form field date picker which calls onChange from props', () => {
  const wrapper = shallow(<FormDatePicker {...props} />);
  const date = moment('01/01/2001', 'MM/DD/YYYY');

  expect(wrapper.find(Form.Field).length).toEqual(1);
  expect(wrapper.find(DatePicker).length).toEqual(1);
  wrapper.find(DatePicker).simulate('change', date);
  const instance = wrapper.instance();
  expect(props.input.onChange).toHaveBeenCalledWith(
    instance.convertToString(date)
  );
});

it('should render a simple value string if read only', () => {
  const wrapper = shallow(<FormDatePicker {...props} readOnly />);

  expect(wrapper.find(Form.Field).length).toEqual(0);
  expect(wrapper.find(DatePicker).length).toEqual(0);
  expect(wrapper.find('.read-only').text()).toEqual(props.input.value);
});
