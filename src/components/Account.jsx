import React from "react";
import UserInfo from "./UserInfo";
import LoginForm from "./LoginForm";

export default function Account({ token, setToken }) {
  return (
    <>
      {token ? <UserInfo token={token} /> : <LoginForm setToken={setToken} />}
    </>
  );
}
