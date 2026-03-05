import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardSetting from "../pages/dashboard/DashboardSetting";

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
    element: <h1>Post page</h1>,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        // path: "", // /dashboard
        index: true, // 인덱스 라우트
        Component: DashboardHome,
      },
      {
        path: "setting", // /dashboard/setting (children 속성으로 중첩된 path에는 /를 적지 않음.)
        Component: DashboardSetting,
        children: [{
          index: true,
          element: <h1>DashboardSetting Home</h1>
        }]
      }
    ],
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
