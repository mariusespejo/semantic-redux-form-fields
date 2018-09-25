import React from 'react';
import { FormInput } from '../input';
import { FormTextArea } from '../textArea';
import { FormDatePicker } from '../datePicker';
import { FormDropdown } from '../dropdown';
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
    const { componentType, ...rest } = this.props;

    let fieldProps = {
      component: this.getComponentType(componentType),
      ...rest
    };

    return <FormField {...fieldProps} />;
  }
}

/** Shorthand alternatives to passing type prop */
Field.Input = props => <Field componentType="input" {...props} />;
Field.TextArea = props => <Field componentType="textArea" {...props} />;
Field.Dropdown = props => <Field componentType="dropdown" {...props} />;
Field.DatePicker = props => <Field componentType="datePicker" {...props} />;

export default Field;
