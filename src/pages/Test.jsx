// import { Link } from 'react-router-dom';
// import openLink from '../utils/openLink';
// import { motion, AnimatePresence } from 'framer-motion';

// const MainPage = () => {
//   const github = 'https://github.com/choeunbin03';
//   const blog = 'https://codstudy.tistory.com/';
//   const email = 'choeunbiin03@naver.com';

//   const testaa = async () => {
//     fetch('http://3.35.102.134:8080/api/account/email/verification', {
//       method: 'POST',
//       body: JSON.stringify({
//         email: 'choeunbiin03@naver.com',
//       }),
//     })
//       .then((response) => response.json())
//       .then((result) => console.log(result));
//   };

//   return (
//     <div className="w-full h-screen relative">
//       <AnimatePresence>
//         <motion.div
//           initial={{ opacity: 0 }} // 초기 상태
//           whileInView={{ opacity: 1 }} // 애니메이션 상태
//           exit={{ opacity: 1 }} // 종료 상태
//           transition={{ duration: 1 }} // 애니메이션 지속 시간
//         >
//           <div
//             className="absolute w-full h-[65%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cover bg-center"
//             // style={{ backgroundImage: `url("/내사진2.jpg")`, opacity: 0.2 }} // 배경 이미지의 투명도
//           ></div>
//           <div className="absolute w-full h-[65%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-istok-web font-normal text-center text-white flex flex-col items-center justify-center bg-cover">
//             <button
//               onClick={() =>
//                 window.open(
//                   'http://3.35.102.134:8080/oauth2/authorization/kakao',
//                   'kakaoLogin',
//                   'width=500,height=700'
//                 )
//               }
//             >
//               카카오로 로그인
//             </button>

//             <button
//               onClick={() =>
//                 window.open(
//                   'http://3.35.102.134:8080/oauth2/authorization/google',
//                   'googleLogin',
//                   'width=500,height=700'
//                 )
//               }
//             >
//               구글로 로그인
//             </button>

//             <button onClick={() => testaa()}>ddddd</button>
//           </div>
//           {/* <div
//             className="absolute w-full h-[65%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cover bg-center"
//             style={{ backgroundImage: `url("/내사진2.jpg")`, opacity: 0.2 }} // 배경 이미지의 투명도
//           ></div>
//           <div className="absolute w-full h-[65%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-istok-web font-normal text-center text-white flex flex-col items-center justify-center bg-cover">
//             <p className="text-[25px]">매일 성장하는 개발자</p>
//             <p className="text-[32px] font-bold">조은빈입니다.</p>
//             <p className="text-[20px]">
//               지식을 공유하며,
//               <br />
//               배움을 즐기며,
//               <br />
//               효율을 추구합니다.
//             </p>
//             <button
//               onClick={() =>
//                 window.open(
//                   'http://localhost:8081/oauth2/authorization/kakao',
//                   'kakaoLogin',
//                   'width=500,height=700'
//                 )
//               }
//             >
//               카카오로 로그인
//             </button>

//             <button
//               onClick={() =>
//                 window.open(
//                   'http://localhost:8081/oauth2/authorization/google',
//                   'googleLogin',
//                   'width=500,height=700'
//                 )
//               }
//             >
//               구글로 로그인
//             </button>
//           </div> */}
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 1 }} // 초기 상태
//           whileInView={{ opacity: 1, scale: 1.5 }} // 애니메이션 상태
//           exit={{ opacity: 1 }} // 종료 상태
//           transition={{ duration: 1 }} // 애니메이션 지속 시간
//         ></motion.div>
//       </AnimatePresence>

//       <div className="absolute left-[30px] bottom-[30px] text-[18px] text-white flex flex-col items-start font-istok-web font-normal">
//         <div className="w-full h-full">
//           <b>github: </b>
//           <span
//             onClick={() => openLink(github)}
//             className="cursor-pointer underline hover:text-[#A078F0]"
//           >
//             {github}
//           </span>
//         </div>
//         <div>
//           <b>blog: </b>
//           <span
//             onClick={() => openLink(blog)}
//             className="cursor-pointer underline hover:text-[#A078F0]"
//           >
//             {blog}
//           </span>
//         </div>
//         <div>
//           <b>email: </b> {email}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainPage;
