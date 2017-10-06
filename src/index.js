import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Label, Input } from 'semantic-ui-react';

class FormInput extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      input: { value, onChange },
      meta: { visited },
      defaultValue
    } = nextProps;
    if (!value && !visited && defaultValue) onChange(defaultValue);
  }

  render() {
    const {
      input,
      meta: { error, touched },
      readOnly,
      width,
      label,
      defaultValue,
      required,
      ...rest
    } = this.props;

    const hasError = touched && Boolean(error);

    if (readOnly) {
      return <span className="read-only">{input.value}</span>;
    }

    return (
      <Form.Field error={hasError} width={width || 10} required={required}>
        {label && <label>{label}</label>}
        <Input {...input} {...rest} />

        {hasError && <Label pointing={true}>{error}</Label>}
      </Form.Field>
    );
  }
}

export default FormInput;
