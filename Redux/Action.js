// actions.js
import api from './api';

export function login(username, password) {
  return dispatch => {
    api.post('/login', { username, password })
      .then(response => {
        dispatch({ type: 'LOGIN_SUCCESS', user: response.data });
      })
      .catch(error => {
        dispatch({ type: 'LOGIN_FAILURE' });
      });
  };
}

export function register(username, email, password) {
  return dispatch => {
    api.post('/register', { username, email, password })
      .then(response => {
        dispatch({ type: 'REGISTER_SUCCESS', user: response.data });
      })
      .catch(error => {
        dispatch({ type: 'REGISTER_FAILURE' });
      });
  };
}

export function getUsers() {
  return dispatch => {
    api.get('/users')
      .then(response => {
        dispatch({ type: 'GET_USERS_SUCCESS', users: response.data });
      })
      .catch(error => {
        dispatch({ type: 'GET_USERS_FAILURE' });
      });
  };
}

export function updateUser(id, username, email) {
  return dispatch => {
    api.put(`/users/${id}`, { username, email })
      .then(response => {
        dispatch({ type: 'UPDATE_USER_SUCCESS', user: response.data });
      })
      .catch(error => {
        dispatch({ type: 'UPDATE_USER_FAILURE' });
      });
  };
}

export function deleteUser(id) {
  return dispatch => {
    api.delete(`/users/${id}`)
      .then(response => {
        dispatch({ type: 'DELETE_USER_SUCCESS', userId: id });
      })
      .catch(error => {
        dispatch({ type: 'DELETE_USER_FAILURE' });
      });
  };
}