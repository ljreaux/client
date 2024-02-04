// function imports
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getAllPosts, getUserInfo } from "./components/API_Calls";

// component imports
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Account from "./components/Account";
import Edit from "./components/posts/Edit";
import PostsByAuthor from "./components/posts/PostByAuthor";
import PostsByTag from "./components/posts/PostsByTag";

function App() {
  const [token, setToken] = useState(null);
  const [posts, setPosts] = useState({});
  const [newPost, setNewPost] = useState(true);
  const [message, setMessage] = useState("");
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    async function posts() {
      const posts = await getAllPosts();

      setPosts(posts);
    }
    posts();
  }, [newPost, message]);

  useEffect(() => {
    async function getInfo() {
      const userInfo = await getUserInfo(token);
      setMyInfo(userInfo);
    }
    getInfo();
  }, [token]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              token={token}
              setToken={setToken}
              posts={posts}
              setNewPost={setNewPost}
              myInfo={myInfo}
            />
          }
        />
        <Route
          path="/account"
          element={
            <Account
              token={token}
              setToken={setToken}
              myInfo={myInfo}
              setMyInfo={setMyInfo}
            />
          }
        />
        <Route
          path="/edit/:postId"
          element={
            <Edit token={token} message={message} setMessage={setMessage} />
          }
        ></Route>
        <Route
          path="/author/:authorId/:authorName"
          element={<PostsByAuthor />}
        />
        <Route path="/:tagname" element={<PostsByTag />} />
      </Routes>
    </>
  );
}

export default App;
