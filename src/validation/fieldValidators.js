export const required = value => (value ? undefined : 'Please provide a value');

export const stringDate = value =>
  value &&
  !/^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20|21)\d\d$/.test(value)
    ? 'Invalid date'
    : undefined;
