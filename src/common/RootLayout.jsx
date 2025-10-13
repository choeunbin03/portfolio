// RootLayout.tsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <Sidebar />
      {/* 메인 콘텐츠: 데스크톱에서는 우측 사이드바 공간 확보, 모바일에서는 전체 너비 */}
      <main className="md:mr-[80px]">
        <Outlet />
      </main>
    </div>
  );
}
