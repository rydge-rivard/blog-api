import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import "./BlogCommentList.css";

export default function BlogCommentList({ comments }) {
  console.log(comments);
  const commentsList = comments.map((comment) => (
    <li key={comment._id}>
      <p>{comment.author + ": " + comment.content}</p>
      <p>{comment.date}</p>
    </li>
  ));

  if (comments.length < 1) {
    return (
      <>
        <h1>No Comments</h1>
        <CommentForm />
      </>
    );
  } else {
    return (
      <>
        <h1>Comments</h1>
        <CommentForm />
        <ul className="comments">{commentsList} </ul>
      </>
    );
  }
}

BlogCommentList.propTypes = {
  comments: PropTypes.object.isRequired,
};
