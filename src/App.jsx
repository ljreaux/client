import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import Feed from "./components/Feed";
function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <nav>
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
        <Route path="/" element={<Home token={token} setToken={setToken} />} />
        <Route
          path="/account"
          element={<Account token={token} setToken={setToken} />}
        />
        <Route path="/feed" element={<Feed token={token} />} />
      </Routes>
    </>
  );
}

export default App;
