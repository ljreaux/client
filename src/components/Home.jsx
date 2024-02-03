import React from "react";
import Register from "./Register";
import { Link } from "react-router-dom";

export default function Home({ token, setToken }) {
  return (
    <div>
      {!token ? (
        <Register setToken={setToken} token={token}></Register>
      ) : (
        <p>Hello</p>
      )}
    </div>
  );
}
