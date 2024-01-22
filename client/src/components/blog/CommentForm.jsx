import "./CommentForm.css";

export default function CommentForm() {
  return (
    <>
      <form
        action="http://localhost:8080/blog/65aa73dba0eca12eb96f94e6/comment"
        method="post"
      >
        <fieldset>
          <ul>
            <li>
              <label htmlFor="author">*Author:</label>
              <input type="text" name="author" id="author" required />
            </li>
            <li>
              <label htmlFor="content">*Comment:</label>
              <textarea
                name="content"
                id="content"
                cols="70"
                rows="5"
                required
              ></textarea>
            </li>
          </ul>
        </fieldset>
        <button>Submit</button>
      </form>
    </>
  );
}
