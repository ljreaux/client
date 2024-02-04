import React from "react";
import { useNavigate } from "react-router-dom";
export default function EditAndDelete({ postId }) {
  const nav = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => nav(`/edit/${postId}`)}>
        Edit Post
      </button>
    </div>
  );
}
