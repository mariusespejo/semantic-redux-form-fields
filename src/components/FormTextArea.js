import React, { Component } from 'react';
import { Form, Label, TextArea } from 'semantic-ui-react';

class FormTextArea extends Component {
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
      return <span className="read-only">{input && input.value}</span>;
    }

    return (
      <Form.Field error={hasError} width={width} required={required}>
        {label && <label>{label}</label>}
        <TextArea {...input} {...rest} value={input.value || ''} />

        {hasError && (
          <Label className="error-message" pointing>
            {error}
          </Label>
        )}
      </Form.Field>
    );
  }
}

export default FormTextArea;
