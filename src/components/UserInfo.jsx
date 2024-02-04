// import React, { useEffect, useState } from "react";
import { getUserInfo } from "./API_Calls";
import Posts from "./posts/Posts";

export default function UserInfo({ token, myInfo, setToken }) {
  const { username = "", name = "", location = "" } = myInfo || {};
  return (
    <div className="user-info">
      <div>
        <h3>Account Information</h3>
        <p>Username: {username}</p>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <button type="button" onClick={() => setToken(null)}>
          Log Out
        </button>
      </div>
      <div className="user-posts">
        <h3>Your Posts</h3>
        <Posts posts={myInfo} myInfo={myInfo}></Posts>
      </div>
    </div>
  );
}
