import React from 'react';
import Field from './Field';
import InlineRow from './InlineRow';

const InlineField = ({ label, labelWidth, ...rest }) => (
  <InlineRow label={label} width={labelWidth}>
    <Field {...rest} />
  </InlineRow>
);

/** Shorthand alternatives to passing type prop */
InlineField.Input = props => <InlineField type="input" {...props} />;
InlineField.Dropdown = props => <InlineField type="dropdown" {...props} />;
InlineField.DatePicker = props => <InlineField type="datePicker" {...props} />;

export default InlineField;
