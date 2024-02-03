import React from "react";
import Register from "./Register";
import { Link } from "react-router-dom";
import Posts from "./posts/Posts";
import AddNewPost from "./posts/AddNewPost";

export default function Home({ token, setToken, posts, setNewPost }) {
  return (
    <div className="component">
      {!token ? (
        <Register setToken={setToken} token={token}></Register>
      ) : (
        <>
          <AddNewPost token={token} setNewPost={setNewPost} />
          <Posts posts={posts} header={"Feed"} />
        </>
      )}
    </div>
  );
}
