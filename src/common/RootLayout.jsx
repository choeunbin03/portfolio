// RootLayout.tsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      {/* 자식 라우트가 그려질 자리 */}
      <Outlet />
    </>
  );
}
