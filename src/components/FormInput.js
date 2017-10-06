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
      errorPosition,
      inline,
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
        style={{ position: 'relative' }}
        inline={inline}
      >
        {label && <label>{label}</label>}
        <Input
          {...input}
          {...rest}
          value={input.value || ''}
          error={hasError}
        />

        {hasError && (
          <Label pointing={inline ? 'left' : true}>
            {error}
          </Label>
        )}
      </Form.Field>
    );
  }
}

export default FormInput;
