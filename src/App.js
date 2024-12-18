// import { BrowserRouter as Router } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import MainPage from './pages/Mainpage';
// import AboutMe from './pages/AboutMe';
// import Skills from './pages/Skills';
// import Projects from './pages/Projects';

// function App() {
//   const [currPage, setCurrPage] = useState(0);

//   const pages = [
//     <MainPage key="main" />,
//     <AboutMe key="about" />,
//     <Skills key="skills" />,
//     <Projects key="projects" />,
//   ];

//   return (
//     <Router>
//       <ScrollHandler setCurrPage={setCurrPage} />
//       <div className="App">
//         <AnimatePresence>
//           <motion.div
//             key={currPage} // 현재 페이지에 따라 애니메이션
//             initial={{ opacity: 1, y: +10 }} // 초기 상태
//             animate={{ opacity: 1, y: 0 }} // 애니메이션 상태
//             exit={{ opacity: 1, y: +100 }} // 종료 상태
//             transition={{ duration: 0.5 }} // 애니메이션 지속 시간
//             className="overflow-hidden"
//           >
//             {pages[currPage]}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </Router>
//   );
// }

// const ScrollHandler = ({ setCurrPage }) => {
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;

//     // 페이지 높이를 기준으로 현재 페이지 결정
//     if (scrollPosition < windowHeight / 2) {
//       setCurrPage(0); // MainPage
//     } else if (scrollPosition < windowHeight * 1.5) {
//       setCurrPage(1); // AboutMe
//     } else if (scrollPosition < windowHeight * 2.5) {
//       setCurrPage(2); // Skills
//     } else {
//       setCurrPage(3); // Projects
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return null;
// };

// export default App;
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/Mainpage';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//https://www.youtube.com/watch?v=hjbxaYTMhy0 참고
//https://codyhouse.co/gem/page-scroll-effects 참고
//https://velog.io/@sangpok/Framer-Motion-%EC%B0%8D%EB%A8%B9%ED%95%98%EA%B8%B0 참고해서 framer motion 공부

function App() {
  return (
    <Router>
      <div className="App bg-[#080808] text-white">
        <MainPage />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </Router>
  );
}

export default App;
