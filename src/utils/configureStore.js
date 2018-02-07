import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  dropdown: () => ({
    values: ['a', 'b']
  })
});

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);
  return store;
}
