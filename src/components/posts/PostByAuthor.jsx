import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsByAuthor } from "../API_Calls";
import Posts from "./Posts";

export default function PostsByAuthor() {
  const [posts, setPosts] = useState("");
  const { authorId, authorName } = useParams();
  useEffect(() => {
    async function getPosts() {
      const posts = await getPostsByAuthor(authorId);
      setPosts(posts);
    }
    getPosts();
  }, [authorId, authorName]);
  return (
    <div className="component">
      <Posts posts={posts} header={`${authorName}`} />
    </div>
  );
}
