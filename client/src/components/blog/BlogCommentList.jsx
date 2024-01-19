import PropTypes from "prop-types";

export default function BlogCommentList({ comments }) {
  console.log(comments);
  const commentsList = comments.map((comment) => (
    <li key={comment._id}>
      <p>{comment.author + ": " + comment.content}</p>
      <p>{comment.date}</p>
    </li>
  ));

  return <ul>{commentsList}</ul>;
}

BlogCommentList.propTypes = {
  comments: PropTypes.object.isRequired,
};
