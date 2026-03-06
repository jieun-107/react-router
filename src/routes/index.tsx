import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardSetting from "../pages/dashboard/DashboardSetting";
import Default from "../pages/layouts/Default";
import Post from "../pages/post/post";
import PostDetail from "../pages/post/PostDetail";

const router = createBrowserRouter([
  {
    // 공통 레이아웃을 제공하는 최상위 라우트
    Component: Default,
    children: [
      {
        path: "/", // 루트 경로
        Component: Home,
      }, // 라우트 객체
      {
        path: "/:locale?/about",
        element: <About />,
      },
      {
        path: "/post?/:id", // 옵셔널 세그먼트 (? 생략가능)
        Component: Post,
      },
      {
        path: "/post/:id/detail/:detail", // 동적 세그먼트 (식별자 중복 불가)
        Component: PostDetail,
      },
      {
        path: "/group", // 공통 경로 세그먼트를 추가할 때 라우트 프리픽스를 사용
        // Component: DashboardLayout, // 필요 시 공통 레이아웃을 지정
        children: [
          {
            path: "dashboard",
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
