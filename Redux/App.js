// App.js
import React from 'eact';
import { Provider } from 'eact-redux';
import store from './store';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Login />
        <Register />
        <Users />
      </div>
    </Provider>
  );
};

export default App;