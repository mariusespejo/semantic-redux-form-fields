import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Label, Input } from 'semantic-ui-react';

class FormInput extends Component {
  handleChange = event => {
    const { value } = event.target;

    this.props.input.onChange(value);
  };

  componentWillReceiveProps(nextProps) {
    const { input: { value, onChange }, defaultValue } = nextProps;
    if (!value && defaultValue) onChange(defaultValue);
  }

  render() {
    const {
      input: { name, onBlur, value },
      meta: { error, touched },
      readOnly,
      width,
      defaultValue,
      ...rest
    } = this.props;

    const hasError = touched && Boolean(error);

    if (readOnly) {
      return <span className="read-only">{value}</span>;
    }

    return (
      <Form.Field onBlur={onBlur} error={hasError} width={width || 10}>
        <Input
          name={name}
          value={value}
          onChange={this.handleChange}
          {...rest}
        />

        {hasError && <Label pointing={true}>{error}</Label>}
      </Form.Field>
    );
  }
}

export default FormInput;
