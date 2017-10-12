import * as fieldValidators from './fieldValidators';

it('should validate that a value is provided', () => {
  expect(fieldValidators.required('')).toEqual('Please provide a value');
  expect(fieldValidators.required('value provided')).toEqual(undefined);
});