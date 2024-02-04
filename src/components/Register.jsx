import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "./API_Calls";

export default function Register({ setToken }) {
  const nav = useNavigate();
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const { firstname, lastname, username, password, location } = e.target;
    const userObj = {
      firstname: firstname.value,
      lastname: lastname.value,
      username: username.value,
      password: password.value,
      location: location.value,
    };

    const user = await register(userObj);
    const { token } = user;

    setToken(token);
    token && nav("/account");

    setMessage(user.message);
  }

  return (
    <div className="register">
      <h1>Welcome to Juicebox</h1>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
        <label htmlFor="firstname">
          First Name: <input type="text" required id="firstname" />
        </label>
        <label htmlFor="lastname">
          Last Name:
          <input type="text" id="lastname" />
        </label>

        <label htmlFor="username">
          Username:
          <input type="text" required id="username" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" required id="password" />
        </label>

        <label htmlFor="location">
          Location:
          <input type="text" required id="location" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {message && <p className="error">{message}</p>}
      <p>
        Already Have an account? <Link to={"/account"}>Login</Link> instead
      </p>
    </div>
  );
}
