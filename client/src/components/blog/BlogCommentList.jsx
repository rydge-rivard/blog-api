import PropTypes from "prop-types";

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
      </>
    );
  } else {
    return (
      <>
        <h1>Comments</h1>
        <ul>{commentsList} </ul>
      </>
    );
  }
}

BlogCommentList.propTypes = {
  comments: PropTypes.object.isRequired,
};
