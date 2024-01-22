import PropTypes from "prop-types";
import "./CommentList.css";
import { useParams } from "react-router-dom";

export default function CommentList({ comments }) {
  const { blogId } = useParams();
  console.log(comments);

  const commentsList = comments.map((comment) => (
    <li className="comment-wrapper" key={comment._id}>
      <p>{comment.author + ": " + comment.content}</p>
      <p>{comment.date}</p>
      <form
        action={`http://localhost:8080/blog/comment/${blogId}/delete`}
        method="post"
      >
        <input
          type="text"
          name="commentId"
          id="commentId"
          hidden
          value={comment._id}
        />
        <button>Delete</button>
      </form>
    </li>
  ));

  if (comments.length < 1) {
    return (
      <>
        <h1>No Comments</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Comments</h1>
        <ul className="comments">{commentsList} </ul>
      </>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.object.isRequired,
};
