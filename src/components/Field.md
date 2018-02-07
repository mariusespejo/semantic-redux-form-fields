#### Field example:
The `Field` component is meant to fuse together redux-form's `Field` and the components within this library.
The benefit of using this component is that you only have to import one field component, and easily change the type as needed.  
  
```js
const { Form } = require('semantic-ui-react');
const { reduxForm } = require('redux-form');
const fieldValidators = require('../validation/fieldValidators');

class Example extends React.Component {
  render() {
    return (
      <Form>
        <Field.Input
          name="fieldInput"
          label="Name"
          validate={fieldValidators.required}
          width={5}
        />
        <Field.Dropdown
          name="fieldDropdown"
          label="State"
          validate={fieldValidators.required}
          mapStateToOptions={state => state.dropdown.values}
          width={5}
        />
        <Field.DatePicker
          name="fieldDatePicker"
          label="Date"
          validate={fieldValidators.required}
          width={5}
        />
        <Field.TextArea
          name="fieldTextArea"
          label="Comment"
          validate={fieldValidators.required}
          width={5}
        />
      </Form>
    );
  }
}

const ExampleForm = reduxForm({
  form: 'formField'
})(Example);

<ExampleForm />;
```
