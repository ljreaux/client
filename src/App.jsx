import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import Feed from "./components/Feed";
import { getAllPosts } from "./components/API_Calls";
import PostsByTag from "./components/posts/PostsByTag";
function App() {
  const [posts, setPosts] = useState({});
  const [newPost, setNewPost] = useState(true);
  useEffect(() => {
    async function posts() {
      const posts = await getAllPosts();
      console.log(posts);
      setPosts(posts);
    }

    posts();
  }, [newPost]);
  const [token, setToken] = useState(null);
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
            />
          }
        />
        <Route
          path="/account"
          element={<Account token={token} setToken={setToken} />}
        />
        <Route path="/:tagname" element={<PostsByTag />} />
      </Routes>
    </>
  );
}

export default App;
