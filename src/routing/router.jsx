import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Home from "../views/home";
import Posts from "../views/Posts";
import PostDetails from "../views/PostDetails";
import Login from "../views/Login";
import Register from "../views/Register";
import { getPosts, getDetailPost, getData } from "./loaders";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
        loader: getData
      },
      {
        path: "/posts",
        Component: Posts,
        loader: getPosts
      },
      {
        path: "/posts/:id",
        Component: PostDetails,
        loader: getDetailPost
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
    ]
  }
]);

export { router };