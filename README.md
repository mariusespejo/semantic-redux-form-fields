# semantic-redux-form-fields [![Build Status](https://travis-ci.org/mariusespejo/semantic-redux-form-fields.svg?branch=master)](https://travis-ci.org/mariusespejo/semantic-redux-form-fields) [![codecov](https://codecov.io/gh/mariusespejo/semantic-redux-form-fields/branch/master/graph/badge.svg)](https://codecov.io/gh/mariusespejo/semantic-redux-form-fields)

A set of form field components combining Semantic UI React and Redux Form

## Installation
To install, run `npm install --save semantic-redux-form-fields`. 

## Demo
https://mariusespejo.github.io/semantic-redux-form-fields/index.html

## Usage
To use one of the form fields, import it and use it as the value for redux-form's `Field` [component prop](https://redux-form.com/7.0.4/docs/api/field.md/#-code-component-component-function-string-code-required-). This assumes that you've already [set up redux-form](https://redux-form.com/7.0.4/docs/gettingstarted.md/) and [semantic-ui-react](https://react.semantic-ui.com/usage).

The example below shows a simple form example with a single field using the `FormInput` component.

```javascript
import React from 'react';
import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';

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


```
### Shorthand
Alternatively, if you want to avoid having to import redux-form's `Field` all the time and also all the individual field types in this library, 
you can instead import `Field` from this library and simply specify the type like so:

```javascript
import { Field } from 'semantic-redux-form-fields';

<Field.Input name="fieldName" label="Label" />
```


## Developer Notes:

To update the styleguide docs: 
- run `npm run styleguide:build`
- make sure to push updates back to the main branch
