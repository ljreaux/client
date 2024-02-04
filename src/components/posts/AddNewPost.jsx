import { createNewPost } from "../API_Calls";

export default function AddNewPost({ token, setNewPost }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const { newTitle: title, newContent: content } = e.target;

    await createNewPost(token, {
      title: title.value,
      content: content.value,
    });
    setNewPost((prev) => !prev);
  }

  return (
    <form onSubmit={handleSubmit} className="new-post">
      <h3>Create New Post</h3>
      <label htmlFor="title">
        <input type="text" placeholder="Title" id="newTitle" />
      </label>
      <label htmlFor="content">
        <textarea placeholder="Content" id="newContent" />
      </label>
      <button>Add new Post</button>
    </form>
  );
}
