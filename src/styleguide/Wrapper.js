import React, { Component } from 'react';
const Provider = require('react-redux').Provider;
const configureStore = require('../utils/configureStore').default;

const store = configureStore({ });
export default class Wrapper extends Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}
