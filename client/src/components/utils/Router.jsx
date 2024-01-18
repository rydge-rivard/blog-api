import Nav from "./Nav.jsx";
import App from "../../App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import BlogDetail from "../blog/BlogDetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/blog/:blogId",
      element: <BlogDetail />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Nav />
    </RouterProvider>
  );
};

export default Router;
