import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";
import store from "./apis/store";

import axios from "axios";
import auth from "./libs/auth";
import { AUTH_LOGIN } from "./apis/types";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);

if (auth.hasToken() === true) {
  const token = auth.getToken();
  axios.defaults.headers.common["Authorization"] = token;

  axios
    .get("http://127.0.0.1:8000/auth/loginwithtoken")
    .then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        auth.setToken(res.data.doc.token);
        store.dispatch({ type: AUTH_LOGIN, payload: res.data.doc });
      }
    })
    .catch((err) => {
      if (err.response.data.message) toast.error(err.response.data.message);
    });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
