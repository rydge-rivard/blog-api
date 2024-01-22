import EditBlogList from "./EditBlogList.jsx";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="wrapper">
      <h1>ADMIN CONSOLE</h1>
      <div>Click to edit.</div>
      <Link to={"/admin/new"}>
        <button>New Blog</button>
      </Link>
      <EditBlogList />
    </div>
  );
}
