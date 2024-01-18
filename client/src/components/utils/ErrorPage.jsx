import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error">
      <h1>ERROR, something went wrong.</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
}
