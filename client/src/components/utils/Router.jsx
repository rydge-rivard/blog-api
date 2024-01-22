import Nav from "./Nav.jsx";
import App from "../../App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import BlogDetail from "../blog/BlogDetail.jsx";
import AdminHome from "../admin/AdminHome.jsx";
import EditBlog from "../admin/EditBlog.jsx";
import NewBlog from "../admin/NewBlog.jsx";
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
    {
      path: "/admin",
      element: <AdminHome />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/admin/new",
      element: <NewBlog />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/admin/:blogId",
      element: <EditBlog />,
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
