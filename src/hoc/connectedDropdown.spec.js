import React from 'react';
import { mount } from 'enzyme';
import connectedDropdown from './connectedDropdown';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);
const Dropdown = () => <div className="dropdown" />;

it('should connect the dropdown to the store and use the provided selector to map values to options', () => {
  const initialState = { values: ['item'] };
  const valuesSelector = state => state.values;
  const store = mockStore(initialState);
  const ConnectedDropdown = connectedDropdown(Dropdown);
  const wrapper = mount(
    <ConnectedDropdown
      mapStateToOptions={valuesSelector}
      store={store}
      onChange={jest.fn()}
    />
  );

  let item = initialState.values[0];

  expect(wrapper.find(Dropdown).props().options).toEqual([
    { key: item, value: item, text: item }
  ]);
});
