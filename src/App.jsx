import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import Feed from "./components/Feed";
import { getAllPosts, getUserInfo } from "./components/API_Calls";
import PostsByTag from "./components/posts/PostsByTag";
import Edit from "./components/posts/Edit";
import PostsByAuthor from "./components/posts/PostByAuthor";
function App() {
  const [token, setToken] = useState(null);
  const [posts, setPosts] = useState({});
  const [newPost, setNewPost] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function posts() {
      const posts = await getAllPosts();

      setPosts(posts);
    }

    posts();
  }, [newPost, message]);
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    async function getInfo() {
      const userInfo = await getUserInfo(token);
      setMyInfo(userInfo);
    }
    getInfo();
  }, [token]);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/account"}>Account</Link>
          </li>
        </ul>
      </nav>
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
