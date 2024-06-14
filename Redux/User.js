// components/Users.js
import React from 'eact';
import { connect } from 'eact-redux';
import { getUsers, updateUser, deleteUser } from '../actions';

const Users = ({ users, getUsers, updateUser, deleteUser }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.email})
            <button onClick={() => updateUser(user.id, user.username, user.email)}>Update</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { users: state.user.users };
};

export default connect(mapStateToProps, { getUsers, updateUser, deleteUser })(Users);