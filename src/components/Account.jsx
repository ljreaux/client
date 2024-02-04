import UserInfo from "./UserInfo";
import LoginForm from "./LoginForm";
import React, { useEffect, useState } from "react";
import { getUserInfo } from "./API_Calls";

export default function Account({ token, setToken, myInfo, setMyInfo }) {
  return (
    <div className="component">
      {token ? (
        <UserInfo
          token={token}
          myInfo={myInfo}
          setMyInfo={setMyInfo}
          myInfo={myInfo}
        />
      ) : (
        <LoginForm setToken={setToken} />
      )}
    </div>
  );
}
