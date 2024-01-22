import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export default function PublishForm({ data }) {
  const { blogId } = useParams();

  if (data.blog.published) {
    return (
      <>
        <form
          action={`http://localhost:8080/blog/${blogId}/unpublish`}
          method="post"
        >
          <button>Unpublish</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <form
          action={`http://localhost:8080/blog/${blogId}/publish`}
          method="post"
        >
          <button>Publish</button>
        </form>
      </>
    );
  }
}

PublishForm.propTypes = {
  data: PropTypes.object.isRequired,
};
