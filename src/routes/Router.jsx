import { createBrowserRouter } from 'react-router';
import MainPage from '../pages/MainPage';
import AboutMe from '../pages/AboutMe';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import RootLayout from '../common/RootLayout';
import Tranner01 from '../pages/projectDetails/Tranner01';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> }, // "/"   (index route)
      { path: 'aboutme', element: <AboutMe /> },
      { path: 'skills', element: <Skills /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/tranner01', element: <Tranner01 /> },
    ],
  },
]);

export default router;
