#### InlineRow example:

The `InlineRow` component is used internally in `InlineField` but can also be used to print out values (like ready only values for example) in a similar layout
Make sure to use it inside a `Grid` of size 2 and to also define the width of the label column.
```js
const { Grid } = require('semantic-ui-react');

class Example extends React.Component {
  render() {
    const labelWidth = 2;
    return (
        <Grid columns={2}>
          <InlineRow label="Label A" width={labelWidth}>Value A</InlineRow>
          <InlineRow label="Label B" width={labelWidth}>Value B</InlineRow>
        </Grid>
    );
  }
}

<Example />;
```
