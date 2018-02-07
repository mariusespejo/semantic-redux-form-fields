import React from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormDatePicker from './FormDatePicker';
import FormDropdown from './FormDropdown';
import { Field as FormField } from 'redux-form';

class Field extends React.Component {
  getComponentType = type => {
    const components = {
      input: FormInput,
      textArea: FormTextArea,
      dropdown: FormDropdown,
      datePicker: FormDatePicker
    };

    return components[type];
  };

  render() {
    const { type, ...rest } = this.props;

    let fieldProps = {
      component: this.getComponentType(type),
      ...rest
    };

    return <FormField {...fieldProps} />;
  }
}

/** Shorthand alternatives to passing type prop */
Field.Input = props => <Field type="input" {...props} />;
Field.TextArea = props => <Field type="textArea" {...props} />;
Field.Dropdown = props => <Field type="dropdown" {...props} />;
Field.DatePicker = props => <Field type="datePicker" {...props} />;

export default Field;
