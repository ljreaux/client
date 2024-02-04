import { useEffect } from "react";
import { Link } from "react-router-dom";
import EditAndDelete from "./EditAndDelete";

export default function Post({
  post: { id, title, content, tags, author },
  myInfo,
}) {
  useEffect(() => console.log(myInfo, author), []);
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <h4>{author.name}</h4>
      <p>{content}</p>
      <span>
        {tags.map((tag) => {
          return (
            <Link
              key={`${tag.name} ${tag.id}`}
              to={`/${tag.name.substring(1)}`}
            >
              {tag.name}{" "}
            </Link>
          );
        })}
      </span>
      {myInfo?.id == author?.id && <EditAndDelete postId={id} />}
    </div>
  );
}
