#### InlineField example:

Use the `InlineField` component inside a `Grid` of size 2, if you want to use multiple inline fields but want the labels to line up properly.

```js
const { Form, Grid } = require('semantic-ui-react');
const { reduxForm } = require('redux-form');
const fieldValidators = require('../validation/fieldValidators');

class Example extends React.Component {
  render() {
    const labelWidth = 2;
    return (
      <Form>
        <Grid columns={2}>
          <InlineField.Input
            name="fieldInput"
            label="Name"
            validate={fieldValidators.required}
            labelWidth={labelWidth}
          />
          <InlineField.Dropdown
            name="fieldDropdown"
            label="State"
            validate={fieldValidators.required}
            mapStateToOptions={state => state.dropdown.values}
            labelWidth={labelWidth}
          />
        </Grid>
      </Form>
    );
  }
}

const ExampleForm = reduxForm({
  form: 'formInlineFields'
})(Example);

<ExampleForm />;
```
