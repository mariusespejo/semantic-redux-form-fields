import React from 'react';
import { Grid } from 'semantic-ui-react';

const InlineRow = ({ label, children, width, value, labelVerticalAlign }) => (
  <Grid.Row style={{ paddingTop: 5, paddingBottom: 5 }}>
    <Grid.Column
      className="form-row-label"
      width={width || 5}
      verticalAlign={labelVerticalAlign || 'middle'}
      textAlign="right"
    >
      <strong>{label}</strong>
    </Grid.Column>
    <Grid.Column className="form-row-value">{value || children}</Grid.Column>
  </Grid.Row>
);

export default InlineRow;
