// reducers/userReducer.js
const initialState = {
    users: [],
    isLoggedIn: false,
    user: {}
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, isLoggedIn: true, user: action.user };
      case 'LOGIN_FAILURE':
        return { ...state, isLoggedIn: false };
      case 'REGISTER_SUCCESS':
        return { ...state, users: [...state.users, action.user] };
      case 'REGISTER_FAILURE':
        return { ...state };
      case 'GET_USERS_SUCCESS':
        return { ...state, users: action.users };
      case 'GET_USERS_FAILURE':
        return { ...state };
      case 'UPDATE_USER_SUCCESS':
        return { ...state, users: state.users.map(user => user.id === action.user.id ? action.user : user) };
      case 'UPDATE_USER_FAILURE':
        return { ...state };
      case 'DELETE_USER_SUCCESS':
        return { ...state, users: state.users.filter(user => user.id !== action.userId) };
      case 'DELETE_USER_FAILURE':
        return { ...state };
      default:
        return state;
    }
  }