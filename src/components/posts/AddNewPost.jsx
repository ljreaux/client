import React, { useEffect, useState } from "react";
import { createNewPost, getAllTags } from "../API_Calls";

export default function AddNewPost({ token, setNewPost }) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    async function getTags() {
      const { tags } = await getAllTags();
      setTags(tags.rows);
    }
    getTags();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const { newTitle: title, newContent: content } = e.target;

    const newPost = await createNewPost(token, {
      title: title.value,
      content: content.value,
    });
    setNewPost((prev) => !prev);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Create New Post</h3>
      <label htmlFor="title">
        <input type="text" placeholder="Title" id="newTitle" />
      </label>
      <label htmlFor="content">
        <textarea placeholder="Content" id="newContent" />
      </label>
      <label htmlFor="Tags">
        Tags
        <input type="text" list="taglist" />
      </label>
      <datalist id="taglist">
        {tags.map(({ name, id }) => {
          return <option value={name} key={id}></option>;
        })}
      </datalist>
      <button>Add new Post</button>
    </form>
  );
}
