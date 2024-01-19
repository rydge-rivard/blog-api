import PropTypes from "prop-types";

export default function BlogCommentList({ comments }) {
  console.log(comments);
  const commentsList = comments.map((comment) => (
    <li key={comment._id}>
      <p>{comment.author}</p>
      <p>{comment.content}</p>
    </li>
  ));

  return <ul>{commentsList}</ul>;
}

BlogCommentList.propTypes = {
  comments: PropTypes.object.isRequired,
};
