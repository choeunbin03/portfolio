// import {
//   SiSpring,
//   SiMysql,
//   SiPython,
//   SiJavascript,
//   SiReact,
//   SiHtml5,
//   SiCss3,
//   SiDocker,
//   SiAmazon,
//   SiGit,
// } from 'react-icons/si';

// const techStack = [
//   { icon: <SiSpring />, name: 'Spring' },
//   { icon: <SiMysql />, name: 'MySQL' },
//   { icon: <SiPython />, name: 'Python' },
//   { icon: <SiJavascript />, name: 'JavaScript' },
//   { icon: <SiReact />, name: 'React' },
//   { icon: <SiDocker />, name: 'Docker' },
//   { icon: <SiAmazon />, name: 'AWS' },
//   { icon: <SiGit />, name: 'Git' },
//   { icon: <SiHtml5 />, name: 'HTML5' },
//   { icon: <SiCss3 />, name: 'CSS3' },
// ];

// export default function TechMarquee() {
//   // 무한 루프를 위해 3번 복제
//   const loop = [...techStack, ...techStack, ...techStack];

//   return (
//     <div className="w-screen overflow-hidden relative">
//       {/* 아이콘 스크롤 */}
//       <div className="flex items-center gap-16 animate-scroll-x py-4">
//         {loop.map((tech, i) => (
//           <div
//             key={i}
//             className="flex flex-col items-center gap-2 min-w-[80px] group"
//           >
//             <span className="text-[50px] text-point-main/40 group-hover:text-point-main group-hover:scale-110 transition-all duration-300">
//               {tech.icon}
//             </span>
//             <span className="text-xs font-semibold text-gray-400 group-hover:text-point-main transition-colors duration-300">
//               {tech.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
