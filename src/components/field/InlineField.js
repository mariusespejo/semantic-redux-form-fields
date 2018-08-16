import React from 'react';
import Field from './Field';
import InlineRow from './InlineRow';

const InlineField = ({
  label,
  labelWidth,
  labelVerticalAlign,
  labelTextAlign,
  required,
  readOnly,
  ...rest
}) => (
  <InlineRow
    label={label}
    width={labelWidth}
    labelVerticalAlign={labelVerticalAlign}
    labelTextAlign={labelTextAlign}
    required={required}
    readOnly={readOnly}
  >
    <Field {...rest} readOnly={readOnly} />
  </InlineRow>
);

/** Shorthand alternatives to passing type prop */
InlineField.Input = props => <InlineField type="input" {...props} />;
InlineField.Dropdown = props => <InlineField type="dropdown" {...props} />;
InlineField.DatePicker = props => <InlineField type="datePicker" {...props} />;

export default InlineField;
