import React, { useEffect, useState } from "react";
import { getUserInfo } from "./API_Calls";

export default function UserInfo({ token }) {
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    async function getInfo() {
      const userInfo = await getUserInfo(token);
      setMyInfo(userInfo);
    }
    getInfo();
  }, []);
  const { username, name, location, posts } = myInfo;
  return (
    <div>
      <ul>
        <li>Username: {username}</li>
        <li>Name: {name}</li>
        <li>Location: {location}</li>
      </ul>
      <div className="user-posts">
        {posts?.map((post) => {
          return (
            <ul key={post.id}>
              <li>
                <h3>{post.title}</h3>
              </li>
              <li> {post.content}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
