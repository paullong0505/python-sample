import { postApi } from "../axios";
import { AUTH_REGISTER_URL, AUTH_LOGIN_URL } from "../../utils/manage_URL";
import { toast } from "react-toastify";
// import { history } from "../../utils/history";
import { AUTH_LOGIN } from "../types";
import auth from "../../libs/auth";
export const ActionRegister = (data) => {
  return (dispatch) => {
    postApi(AUTH_REGISTER_URL, data)
      .then((res) => {
        if (res.status === 200) toast.success(res.data.message);
        else toast.warn(res.data.message);
      })
      .catch((err) => {
        if (err.data.message) toast.error(err.data.message);
      });
  };
};

export const ActionLogin = (data) => {
  return (dispatch) => {
    postApi(AUTH_LOGIN_URL, data)
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          dispatch({ type: AUTH_LOGIN, payload: res.data.doc });
          auth.setToken(res.data.doc.token);
          // history.push("/home");
        } else {
          toast.warn(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.data.message) toast.error(err.data.message);
      });
  };
};
