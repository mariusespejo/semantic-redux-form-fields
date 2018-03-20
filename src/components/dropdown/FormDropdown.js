import React, { Component } from 'react';
import { connectedDropdown } from '../../hoc';
import { Form, Dropdown, Label } from 'semantic-ui-react';

export const ReduxDropdown = connectedDropdown(Dropdown);

class FormDropdown extends Component {
  handleChange = (e, { value, options }) => {
    const { input: { onChange } } = this.props;
    onChange(value);
  };

  render() {
    const {
      input: { name, onBlur, value },
      meta: { error, touched },
      meta,
      simpleValue,
      label,
      readOnly,
      width,
      errorMessageStyle,
      required,
      inline,
      ...rest
    } = this.props;

    let hasError = touched && Boolean(error);

    if (readOnly) {
      return (
        <span className="read-only">
          {this.props.multiple && Array.isArray(value)
            ? value.join(', ')
            : value}
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
        <ReduxDropdown
          name={name}
          value={value}
          label={label}
          search
          selection
          onChange={this.handleChange}
          selectOnBlur={touched}
          onBlur={e => {
            e.preventDefault();
            onBlur(e);
          }}
          {...rest}
        />

        {hasError && (
          <Label
            className="error-message"
            pointing={inline ? 'left' : true}
            style={errorMessageStyle}
          >
            {error}
          </Label>
        )}
      </Form.Field>
    );
  }
}

export default FormDropdown;
