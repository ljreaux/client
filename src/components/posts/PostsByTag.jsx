import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsByTag } from "../API_Calls";
import Posts from "./Posts";

export default function PostsByTag() {
  const { tagname } = useParams();
  const [posts, setPosts] = useState("");

  useEffect(() => {
    async function getPosts() {
      const posts = await getPostsByTag(tagname);
      setPosts(posts);
    }
    getPosts();
  }, [tagname]);

  return (
    <div className="component">
      <Posts posts={posts} header={`#${tagname}`} />
    </div>
  );
}
