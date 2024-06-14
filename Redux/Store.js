// store.js
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer
});

const store = createStore(rootReducer);

export default store;