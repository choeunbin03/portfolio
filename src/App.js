import './App.css';
import WelcomePage from './pages/WelcomePage';
import MainInfo from './pages/MainInfo';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './common/Header';
import { RouterProvider } from 'react-router';
import router from './routes/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import TokenCallback from './api/TokenCallback';

//https://www.youtube.com/watch?v=hjbxaYTMhy0 참고
//https://codyhouse.co/gem/page-scroll-effects 참고
//https://velog.io/@sangpok/Framer-Motion-%EC%B0%8D%EB%A8%B9%ED%95%98%EA%B8%B0 참고해서 framer motion 공부

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;
