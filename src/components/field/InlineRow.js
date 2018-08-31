import React from 'react';
import { Grid } from 'semantic-ui-react';

const InlineRow = ({
  label,
  children,
  width,
  value,
  labelVerticalAlign,
  labelTextAlign,
  required,
  readOnly,
  style
}) => (
  <Grid.Row style={style || { paddingTop: 5, paddingBottom: 5 }}>
    <Grid.Column
      className="form-row-label"
      width={width || 5}
      verticalAlign={labelVerticalAlign || 'middle'}
      textAlign={labelTextAlign || 'right'}
    >
      <strong>{label}</strong>
      {required &&
        !readOnly && (
          <span style={{ margin: '-.2em 0 0 .2em', color: '#db2828' }}>*</span>
        )}
    </Grid.Column>
    <Grid.Column className="form-row-value">{value || children}</Grid.Column>
  </Grid.Row>
);

export default InlineRow;
