#### FormInput example:
Try deleting the value and remove focus from the input to see example validation.

```js
const { Form } = require('semantic-ui-react');
const { Field, reduxForm } = require('redux-form');
const { fieldValidators } = require('../../validation');

class Example extends React.Component {
  render() {
    return (
      <Form>
          <Field
            component={FormInput}
            name="fieldName" 
            label="Label"
            validate={fieldValidators.required}
            defaultValue="default value"
            width={5} />
      </Form>
    );
  }
}

const ExampleForm = reduxForm({
  form: 'formName'
})(Example);

<ExampleForm />
```

#### Inline example:
Try clicking on the input and remove focus without typing a value to see example validation.


```js
const { Form } = require('semantic-ui-react');
const { Field, reduxForm } = require('redux-form');
const { fieldValidators } = require('../../validation');

class Example extends React.Component {
  render() {
    return (
        <Form>
          <Field
            component={FormInput}
            name="fieldName" 
            label="Label"
            validate={fieldValidators.required}
            inline />
        </Form>
    );
  }
}

const ExampleForm = reduxForm({
  form: 'anotherFormName'
})(Example);

<ExampleForm />
```

