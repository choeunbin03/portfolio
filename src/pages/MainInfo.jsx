// import InfoComponents from '../compenents/InfoComponents';
// import { motion, AnimatePresence } from 'framer-motion';
// import ProjectListComponents from '../compenents/ProjectListComponent';
// import Projects from './Projects';

// const MainInfo = () => {
//   //이름(name)
//   const name = '조은빈';
//   //생년월일(birth)
//   const birth = '2003.03.24';
//   //학력(education)
//   const education = [
//     {
//       content: '진명여자고등학교',
//       period: '2019.03 ~ 2022.02',
//     },
//     {
//       content: '숭실대학교 소프트웨어학부',
//       period: '2022.03 ~ ',
//     },
//   ];
//   //경력(career)
//   const career = [];
//   //수상경력(awards)
//   const award = [];
//   //활동 이력(active)
//   const active = [];
//   //자격증(certificate)
//   const certificate = [
//     {
//       content: 'TOPCIT(ICT 역량지수) 수준3',
//       period: '2025.05.24',
//     },
//     {
//       content: '정보처리기사',
//       period: '',
//     },
//     {
//       content: 'SQLD',
//       period: '',
//     },
//   ];
//   //컨택(contact)
//   const contact = {
//     email: 'choeunbiin03@naver.com',
//     phone: '010-9332-3488',
//   };

//   const personalInfo = {
//     name: name,
//     birth: birth,
//     contact: contact,
//   };

//   const info = {
//     education: education,
//     career: career,
//     award: award,
//     active: active,
//     certificate: certificate,
//   };

//   //project 목록
//   const projects = [
//     {
//       title: 'Tranner1',
//       subtitle: '여행 계획 웹서비스',
//       headCount: { BE: 3, FE: 2 },
//       myPart: 'FE',
//       period: '2024.09.01 ~ 2024.12.15',
//     },
//     {
//       title: 'Tranner2',
//       subtitle: '여행 계획 웹서비스',
//       headCount: { BE: 1, FE: 1, AI: 3 },
//       myPart: 'BE',
//       period: '2025.03.03 ~ 2025.06.20',
//     },
//   ];

//   return (
//     <div className="w-full justify-center flex flex-col items-center">
//       {/* 내 정보 부분_start */}
//       <div className="w-full m-[50px] md:h-screen flex justify-center items-center">
//         <div className="w-[80%]">
//           <AnimatePresence>
//             <motion.div
//               initial={{ opacity: 1, y: +30 }} // 초기 상태
//               whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
//               exit={{ opacity: 1, y: +100 }} // 종료 상태
//               transition={{ duration: 0.5 }} // 애니메이션 지속 시간
//               className="overflow-hidden"
//             >
//               <div className="">
//                 <p className="flex items-start pl-5  text-[50px] font-bold  w-full pb-2 h-[85px]">
//                   About Me.
//                 </p>
//                 <hr className="border-point-main border-t-2" />
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           <div className="min-h-[90%] md:flex m-5 ">
//             <AnimatePresence>
//               <motion.div
//                 initial={{ opacity: 1, x: -50 }} // 초기 상태
//                 whileInView={{ opacity: 1, x: 0 }} // 애니메이션 상태
//                 exit={{ opacity: 1, x: +100 }} // 종료 상태
//                 transition={{ duration: 0.5 }} // 애니메이션 지속 시간
//                 className="flex flex-col items-start mr-[40px] "
//               >
//                 <img
//                   src="조은빈.jpg"
//                   className="w-[300px] sm:w-[300px] md:min-w-[280px] md:w-[270px] lg:w-[330px] my-[25px]"
//                   alt="증명사진"
//                 />
//                 <div className="justify-items-start ">
//                   <p className="font-bold text-[30px]">{personalInfo.name}</p>
//                   <p className=" text-[21px] text-gray-700">
//                     🎂 {personalInfo.birth}
//                   </p>
//                   <p className="text-[21px] text-gray-700">
//                     📧 {personalInfo.contact.email}
//                   </p>
//                   <p className="text-[21px] text-gray-700">
//                     📞 {personalInfo.contact.phone}
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             <AnimatePresence>
//               <motion.div
//                 initial={{ opacity: 1, x: +50 }} // 초기 상태
//                 whileInView={{ opacity: 1, x: 0 }} // 애니메이션 상태
//                 exit={{ opacity: 1, x: -100 }} // 종료 상태
//                 transition={{ duration: 0.5 }} // 애니메이션 지속 시간
//                 className="w-[75%]"
//               >
//                 <div className="h-full min-w-[460px] text-left">
//                   {Object.entries(info).map(([key, value]) => {
//                     if (value && value.length > 0) {
//                       return <InfoComponents label={key} contents={value} />;
//                     }
//                     return null;
//                   })}
//                   <div className="flex flex-col items-start mt-5">
//                     <p className="text-[26px] font-bold">Introduction</p>
//                     <p className="text-[16px] ml-2 mt-2 flex text-left">
//                       배우고 성장하는 데서 즐거움을 느끼고, <br />
//                       문제점과 발전 방향에 대해 고민하며 성장하는 것을
//                       좋아합니다. <br />
//                       함께 배우고 발전할 수 있는 동료가 되어가고 싶습니다.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* <div className="w-[25%] flex items-center mr-[80px]">
//             <img src="내사진.jpg" className=""></img>
//           </div> */}
//           </div>
//         </div>
//       </div>
//       {/* 내 정보 부분_end */}

//       {/* Skill 부분_start */}
//       <div className="w-full flex justify-center items-center">
//         <div className="w-[80%] h-[80%]">
//           <AnimatePresence>
//             <motion.div
//               initial={{ opacity: 1, y: +30 }} // 초기 상태
//               whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
//               exit={{ opacity: 1, y: +100 }} // 종료 상태
//               transition={{ duration: 0.5 }} // 애니메이션 지속 시간
//               className="overflow-hidden"
//             >
//               <p className="flex items-start pl-5 text-[50px] font-bold w-full pb-2 h-[85px]">
//                 Skills
//               </p>
//               <hr className="border-point-main border-t-2" />
//             </motion.div>
//           </AnimatePresence>
//           <AnimatePresence>
//             <motion.div
//               initial={{ opacity: 1, y: +30 }} // 초기 상태
//               whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
//               exit={{ opacity: 1, y: +100 }} // 종료 상태
//               transition={{ duration: 0.5 }} // 애니메이션 지속 시간
//               className="overflow-hidden"
//             >
//               <p className="flex items-start ml-5 mb-5 text-[40px] font-bold">
//                 기술 스택 아이콘들
//               </p>
//               <hr />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//       {/* Skill 부분_end */}

//       {/* Project 부분_start */}
//       <div className="md:h-screen w-full flex justify-center items-center">
//         <div className="w-[80%] h-[80%]">
//           <AnimatePresence>
//             <motion.div
//               initial={{ opacity: 1, y: +30 }} // 초기 상태
//               whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
//               exit={{ opacity: 1, y: +100 }} // 종료 상태
//               transition={{ duration: 0.5 }} // 애니메이션 지속 시간
//               className=""
//             >
//               <div className="">
//                 <p className="flex items-start pl-5 text-[50px] font-bold w-full pb-2 h-[85px]">
//                   Projects
//                 </p>
//                 <hr className="border-point-main border-t-2" />
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           <AnimatePresence>
//             <motion.div
//               initial={{ opacity: 1, x: -50 }} // 초기 상태
//               whileInView={{ opacity: 1, x: 0 }} // 애니메이션 상태
//               exit={{ opacity: 1, x: +100 }} // 종료 상태
//               transition={{ duration: 0.5 }} // 애니메이션 지속 시간
//               className="h-full"
//             >
//               {/* <ProjectListComponents projects={projects} /> */}
//               <Projects />
//             </motion.div>
//           </AnimatePresence>

//           {/* <div className="w-full h-[90%] flex p-5"></div> */}
//         </div>
//       </div>
//       {/* Project 부분_end */}
//     </div>
//   );
// };

// export default MainInfo;
