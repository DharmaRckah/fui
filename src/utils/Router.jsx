import { createBrowserRouter } from "react-router-dom";
import Technology from "../Components/Technology";
import Infrastructure from "../Components/Infrastructure";
import App from "../App";
import Contact from "../Components/Contact";
import { AboutUs } from "../Components/AboutUs";
import Blog from "../Components/tech/Blog";
import BlogDetails from "../Components/tech/BlogDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/technology",
    element: <Technology />,
  },
 
  {
    path: "/infrastructure",
    element: <Infrastructure />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/blog-details", element: <BlogDetails /> },
]);

export default router;
