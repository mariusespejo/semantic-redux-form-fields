import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class FormDatePicker extends Component {
  convertToString = dateObj => moment(dateObj).format('MM/DD/YYYY');
  handleChange = value => {
    const {
      input: { onChange }
    } = this.props;
    const stringDate = this.convertToString(value);

    onChange(stringDate);
  };

  componentWillReceiveProps(nextProps) {
    const {
      input: { value },
      defaultValue
    } = nextProps;
    if (!value && defaultValue) this.handleChange(defaultValue);
  }

  render() {
    const {
      input: { name, onBlur, value },
      meta: { error, touched },
      label,
      readOnly,
      width,
      errorPosition,
      defaultValue,
      required,
      placeholder,
      errorMessageStyle,
      inline,
      ...rest
    } = this.props;

    let selectedDate = value;

    let hasError = touched && Boolean(error);

    if (!value) {
      selectedDate = defaultValue;
    }

    if (value && typeof value === 'string') {
      if (value.length === 10) selectedDate = moment(value, 'MM/DD/YYYY');
      else selectedDate = moment(value);
    }

    if (readOnly) return <span className="read-only">{value}</span>;

    return (
      <Form.Field
        width={width}
        className="form-date-picker"
        name={name}
        error={hasError}
        required={required}
      >
        {label && <label>{label}</label>}
        <DatePicker
          selected={selectedDate}
          onChange={this.handleChange}
          placeholderText={placeholder}
          onBlur={onBlur}
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

export default FormDatePicker;
