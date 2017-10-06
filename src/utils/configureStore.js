import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState
  );
  return store;
}
