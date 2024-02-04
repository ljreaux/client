import React, { useEffect, useState } from "react";
import { getPostById, getAllTags } from "../API_Calls";
import { useParams } from "react-router-dom";
export default function Edit() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function setEdited() {
      const postToEdit = await getPostById(postId);
      setPost(postToEdit.post);
    }
    setEdited();
  }, [postId]);
  const [allTags, setAllTags] = useState([]);
  useEffect(() => {
    async function getTags() {
      const { tags: taglist } = await getAllTags();
      setAllTags(taglist.rows);
    }
    getTags();
  }, []);

  const { title, content, tags } = post;

  function handleContentChange(e) {
    setPost((prev) => {
      return { ...prev, content: e.target.value };
    });
  }
  function handleTitleChange(e) {
    setPost((prev) => {
      return { ...prev, title: e.target.value };
    });
  }
  return (
    <form className="component edit-post">
      <label htmlFor="title">
        Title:{" "}
        <input type="text" value={title ?? ""} onChange={handleTitleChange} />
      </label>
      <label htmlFor="content">
        Content:{" "}
        <textarea
          type="text"
          value={content ?? ""}
          onChange={handleContentChange}
        />
      </label>
      <label htmlFor="Tags">
        Tags
        <input type="text" list="taglist" />
      </label>
      <datalist id="taglist">
        {allTags.map(({ name, id }) => {
          return <option value={name} key={id}></option>;
        })}
      </datalist>
      <button type="submit">Submit Changes</button>
      <button type="button" className="delete-btn">
        Delete Post
      </button>
    </form>
  );
}
