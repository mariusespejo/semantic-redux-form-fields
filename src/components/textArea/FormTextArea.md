#### FormTextArea example:

```js
const { Form } = require('semantic-ui-react');
const { Field, reduxForm } = require('redux-form');
const { fieldValidators } = require('../../validation');

class Example extends React.Component {
  render() {
    return (
      <Form>
          <Field
            component={FormTextArea}
            name="text" 
            label="Label"
            validate={fieldValidators.required} />
      </Form>
    );
  }
}

const ExampleForm = reduxForm({
  form: 'textAreaExample'
})(Example);

<ExampleForm />
```

