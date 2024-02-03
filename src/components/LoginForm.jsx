import { useState } from "react";
import { login } from "./API_Calls";

export default function LoginForm({ setToken }) {
  const [message, setMessage] = useState("");
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
    setMessage(user.message);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Please Login to View account info.</h3>
        <label htmlFor="username">
          Username: <input type="text" id="loginUser" />
        </label>
        <label htmlFor="password">
          Password: <input type="password" id="loginPass" />
        </label>
        <button type="submit">Submit</button>
        {message && <p className="error">{message}</p>}
      </form>
    </>
  );
}
