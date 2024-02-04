import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, getAllTags, deletePost, editPost } from "../API_Calls";
import TagButton from "./TagButton";

export default function Edit({ token, message, setMessage }) {
  const nav = useNavigate();
  const { postId } = useParams();

  const [post, setPost] = useState({});
  const { title, content } = post;

  const [tagList, setTagList] = useState({});
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    async function setEdited() {
      const postToEdit = await getPostById(postId);
      setPost(postToEdit.post);
    }
    setEdited();
  }, [postId]);

  useEffect(() => {
    async function getTags() {
      const { tags: taglist } = await getAllTags();
      setAllTags(taglist.rows);
    }
    getTags();
  }, []);

  useEffect(() => {
    setMessage("");
  }, [postId]);

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

  async function handleDelete() {
    const edited = await editPost(
      postId,
      {
        title: "about to delete",
        content: "about to delete",
        tags: "",
      },
      token
    );
    console.log(edited);
    const deletedRes = await deletePost(postId, token);
    setMessage(deletedRes.message);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { editTitle: title, editContent: content } = e.target;
    const body = {
      title: title.value,
      content: content.value,
    };
    if (Object.keys(tagList).length > 0) {
      body.tags = Object.keys(tagList).join(" ");
    } else {
      body.tags = null;
    }
    const edited = await editPost(postId, body, token);
    if (edited) setMessage("Message Edited Successfully!");
    console.log(edited);
  }

  return (
    <form
      className="component edit-post"
      onSubmit={(e) => {
        handleSubmit(e);
        setTimeout(() => nav("/"), 3000);
      }}
    >
      <h1>Edit Post</h1>
      <label htmlFor="title">
        Title:{" "}
        <input
          type="text"
          value={title ?? ""}
          onChange={handleTitleChange}
          id="editTitle"
        />
      </label>
      <label htmlFor="content">
        Content:{" "}
        <textarea
          type="text"
          value={content ?? ""}
          onChange={handleContentChange}
          id="editContent"
        />
      </label>{" "}
      <div className="tags-container">
        <h3>Tags</h3>
        <span className="tags">
          {allTags.map(({ name, id }) => {
            return (
              <TagButton
                name={name}
                key={id}
                tagList={tagList}
                setTagList={setTagList}
              />
            );
          })}
        </span>
        <div>
          <label htmlFor="newTag">
            Add New Tag
            <input type="text" />
          </label>
        </div>
      </div>
      <button type="submit">Submit Changes</button>
      <button
        type="button"
        className="delete-btn"
        onClick={() => {
          handleDelete();
          setTimeout(() => nav("/"), 3000);
        }}
      >
        Delete Post
      </button>
      <p
        className={`${
          message == "Message Edited Successfully!" ? "success" : "error"
        }`}
      >
        {message}
      </p>
    </form>
  );
}
