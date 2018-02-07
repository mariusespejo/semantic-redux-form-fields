#### FormDropdown example:

```js
const { Form } = require('semantic-ui-react');
const { Field, reduxForm } = require('redux-form');
const { fieldValidators } = require('../../validation');

class Example extends React.Component {
  render() {
    return (
        <Form>
            <Field
                component={FormDropdown}
                name="dropdown" 
                label="Label"
                validate={fieldValidators.required}
                mapStateToOptions={state => state.dropdown.values}
                width={5} />
        </Form>
    );
  }
}

const ExampleForm = reduxForm({
  form: 'dropdown'
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
                component={FormDropdown}
                name="inlineDropdown" 
                label="Label"
                validate={fieldValidators.required}
                mapStateToOptions={state => state.dropdown.values}
                inline />
        </Form>
    );
  }
}

const ExampleForm = reduxForm({
  form: 'inlineDropdown'
})(Example);

<ExampleForm />
```
