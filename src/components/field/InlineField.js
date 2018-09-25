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
  rowStyle,
  ...rest
}) => (
  <InlineRow
    label={label}
    width={labelWidth}
    labelVerticalAlign={labelVerticalAlign}
    labelTextAlign={labelTextAlign}
    required={required}
    readOnly={readOnly}
    style={rowStyle}
  >
    <Field {...rest} readOnly={readOnly} />
  </InlineRow>
);

/** Shorthand alternatives to passing type prop */
InlineField.Input = props => <InlineField componentType="input" {...props} />;
InlineField.Dropdown = props => (
  <InlineField componentType="dropdown" {...props} />
);
InlineField.DatePicker = props => (
  <InlineField componentType="datePicker" {...props} />
);

export default InlineField;
