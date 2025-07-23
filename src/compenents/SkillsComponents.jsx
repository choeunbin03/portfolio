import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import upperFirstLetter from '../utils/upperFirstLetter';

// const strong = {
//   language: ['Java', 'Spring', 'MySql'],
//   detail: '',
// };
// //knowledgeable
// const knowledgeable = {
//   language: ['Typescript', 'React', 'Jsp', 'Javascript', 'Html/Css'],
//   detail: '',
// };
// //experienced
// const experienced = {
//   language: ['Aws'],
//   detail: '',
// };

const SkillsComponents = ({ isOpened, setIsOpened, label, contents }) => {
  //문장 단위로 새로운 줄로 바꿔서 출력
  const sentences = contents.detail.split('\n').map((sentence, index) => (
    <p key={index}>{sentence.trim()}</p> // 각 문장을 <p> 태그로 감싸서 출력
  ));

  const handleOpen = () => {
    setIsOpened((prev) => ({
      ...prev,
      [label]: !isOpened,
    }));
  };

  return (
    <div className="flex flex-col items-start ml-7 mt-5">
      <p className="text-[28px] font-bold text-[#7122fa]">
        {upperFirstLetter(label)}
      </p>
      <div
        onClick={handleOpen}
        className="flex ml-2 mt-3 text-[22px] items-center cursor-default z-10"
      >
        {!isOpened ? (
          <i className="xi-angle-right-min"></i>
        ) : (
          <i className="xi-angle-down-min"></i>
        )}{' '}
        {contents.language.map((element) => (
          <p className="ml-2">{element}&nbsp;&nbsp;</p>
        ))}
      </div>
      {/* 이거 열릴 때 애니메이션 추가 */}
      <div
        className={`w-[600px] ml-2 border-t-2 border-[#7122fa] px-2 py-2 mt-2 text-[16px] flex flex-col items-start transition-all duration-300 ease-in-out ${
          isOpened
            ? 'max-h-60 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {sentences}
      </div>
    </div>
  );
};

export default SkillsComponents;

{
  /* <AnimatePresence>
          <motion.div
            key={isOpened} // key로 currentProject 사용
            initial={{ opacity: 0, y: -50 }} // 초기 상태
            animate={{ opacity: 1, y: 0 }} // 애니메이션 상태
            exit={{ opacity: 0, y: -100 }} // 종료 상태
            transition={{ duration: 0.2 }} // 애니메이션 지속 시간
            className="z-0"
          >
            <div className="w-[600px] ml-2 border-t-2 border-gray-500 px-2 py-2 mt-2 text-[16px] flex flex-col items-start">
              {sentences}
            </div>
          </motion.div>
        </AnimatePresence> */
}
