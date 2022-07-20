import { AUTH_LOGIN } from "../types";
const initialState = {
  user: "",
  token: "",
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.payload.auth,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
export default authReducer;
