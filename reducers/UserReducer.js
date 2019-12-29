export const UserReducer = (state, action) => {
  switch (action.type) {
    case "NEW_PASSWORD_REQUIRED":
      return {
        ...state,
        user: action.user,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        newUser: action.newUser,
      };
    case "SIGNUP_FAIL":
      return {
        ...state,
        user: null,
        newUser: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.user,
        newUser: null,
      };
    case "CHECK_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.user,
        newUser: null,
      };
    case "CHECK_LOGIN_FAIL":
      return {
        ...state,
        user: null,
        newUser: null,
      };
    case "LOGIN_FAIL":
      return state;
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        user: null,
        newUser: null,
      };
    default:
      return state;
  }
};