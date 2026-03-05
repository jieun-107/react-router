import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  }, // 라우트 객체
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/post",
    element: <h1>Post page</h1>
  }
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
