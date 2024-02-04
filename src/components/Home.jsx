import Register from "./Register";
import AddNewPost from "./posts/AddNewPost";
import Posts from "./posts/Posts";

export default function Home({ token, setToken, posts, setNewPost, myInfo }) {
  return (
    <div className="component">
      {!token ? (
        <Register setToken={setToken}></Register>
      ) : (
        <>
          <AddNewPost token={token} setNewPost={setNewPost} />
          <Posts posts={posts} header={"Feed"} myInfo={myInfo} />
        </>
      )}
    </div>
  );
}
