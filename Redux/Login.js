// components/Login.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

const Login = ({ login, isLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
      {isLoggedIn? <p>You are logged in!</p> : <p>You are not logged in.</p>}
    </div>
  );
};

const mapStateToProps = state => {
  return { isLoggedIn: state.user.isLoggedIn };
};

export default connect(mapStateToProps, { login })(Login);