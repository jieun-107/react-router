import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardSetting from "../pages/dashboard/DashboardSetting";
import Default from "../pages/layouts/Default";
import DashboardLayout from "../pages/layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    Component: Default,
    children: [
      {
        path: "/",
        Component: Home,
      }, // 라우트 객체
      {
        path: "/about",
        element: <About />,
      },
      {
        Component: DashboardLayout,
        children: [
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
                children: [
                  {
                    index: true,
                    element: <h1>DashboardSetting Home</h1>,
                  },
                ],
              },
            ],
          },
        ],
      },
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
