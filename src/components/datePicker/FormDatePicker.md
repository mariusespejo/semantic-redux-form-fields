#### FormDatePicker example:

```js
const { Form } = require('semantic-ui-react');
const { Field, reduxForm } = require('redux-form');
const { fieldValidators } = require('../../validation');

class Example extends React.Component {
  render() {
    return (
      <Form>
          <Field
            component={FormDatePicker}
            name="date" 
            label="Label"
            validate={[fieldValidators.required, fieldValidators.stringDate]} />
      </Form>
    );
  }
}

const ExampleForm = reduxForm({
  form: 'datePickerExample'
})(Example);

<ExampleForm />
```

