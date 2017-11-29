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
    if (!value && !visited && (defaultValue || defaultValue === 0)) onChange(defaultValue);
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
      inline,
      errorMessageStyle,
      ...rest
    } = this.props;

    const hasError = touched && Boolean(error);

    if (readOnly) {
      return (
        <span className="read-only">
          {input && input.value && input.value.toLocaleString()}
        </span>
      );
    }

    return (
      <Form.Field
        error={hasError}
        width={width}
        required={required}
        inline={inline}
      >
        {label && <label>{label}</label>}
        <Input
          {...input}
          {...rest}
          value={(input.value || input.value === 0)  ? input.value : ''}
          error={hasError}
        />

        {hasError && (
          <Label className="error-message" pointing={inline ? 'left' : true} style={errorMessageStyle}>
            {error}
          </Label>
        )}
      </Form.Field>
    );
  }
}

export default FormInput;
