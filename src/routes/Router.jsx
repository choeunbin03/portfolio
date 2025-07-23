import { createBrowserRouter } from 'react-router';
import Header from '../common/Header';
import MainPage from '../pages/MainPage';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      // 메인 페이지
      {
        path: '/',
        element: <MainPage />,
      },
      // Auth 관련 페이지
    ],
  },
]);

export default router;
