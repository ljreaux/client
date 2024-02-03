import React, { useEffect, useState } from "react";
import { getUserInfo } from "./API_Calls";
import Posts from "./posts/Posts";

export default function UserInfo({ token }) {
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    async function getInfo() {
      const userInfo = await getUserInfo(token);
      setMyInfo(userInfo);
    }
    getInfo();
  }, []);
  const { username, name, location } = myInfo;
  return (
    <div className="user-info">
      <div>
        <h3>Account Information</h3>
        <p>Username: {username}</p>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
      </div>
      <div className="user-posts">
        <h3>Your Posts</h3>
        <Posts posts={myInfo}></Posts>
      </div>
    </div>
  );
}
