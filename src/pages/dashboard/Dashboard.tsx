import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      {/* 하위 라우트가 여기 렌더링 됨 */}
      <Outlet />
    </>
  )
}
