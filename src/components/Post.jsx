import { useContext, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  const [reactions, setReactions] = useState(0);

  return (
    <div
      className="card post-card m-5 p-2 shadow"
      style={{ maxWidth: "30rem", margin: "0 auto", userSelect: "none" }}
      onDoubleClick={() => setReactions(reactions + 1)}
    >
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {post.title}
          <span
            className="badge rounded-pill bg-danger"
            style={{ cursor: "pointer" }}
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin6Fill />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="mb-3">
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary m-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="alert alert-primary m-3" role="alert">
        {reactions} people found it interesting
      </div>
    </div>
  );
}

export default Post;
