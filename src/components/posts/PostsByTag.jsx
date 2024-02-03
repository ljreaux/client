import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsbyTag } from "../API_Calls";
import Posts from "./Posts";

export default function PostsByTag() {
  const [posts, setPosts] = useState("");
  const { tagname } = useParams();
  useEffect(() => {
    async function getPosts() {
      const posts = await getPostsbyTag(tagname);
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
