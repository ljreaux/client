import React from "react";
import { login } from "./API_Calls";

export default function LoginForm({ setToken }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const { loginUser: username, loginPass: password } = e.target;
    const userObj = {
      username: username.value,
      password: password.value,
    };
    const user = await login(userObj);
    const { token } = user;
    setToken(token);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Please Login to View account info.</h3>
      <label htmlFor="username">
        Username: <input type="text" id="loginUser" />
      </label>
      <label htmlFor="password">
        Password: <input type="password" id="loginPass" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
