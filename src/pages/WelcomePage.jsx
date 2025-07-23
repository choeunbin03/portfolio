import { Link } from 'react-router-dom';
import openLink from '../utils/openLink';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomePage = () => {
  const github = 'https://github.com/choeunbin03';
  const blog = 'https://codstudy.tistory.com/';
  const email = 'choeunbiin03@naver.com';

  return (
    <div className="w-full h-screen relative">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }} // 초기 상태
          whileInView={{ opacity: 1 }} // 애니메이션 상태
          exit={{ opacity: 1 }} // 종료 상태
          transition={{ duration: 0.5 }} // 애니메이션 지속 시간
        >
          <div
            className="absolute w-full h-[65%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cover bg-center"
            // style={{ backgroundImage: `url("/내사진2.jpg")`, opacity: 0.2 }} // 배경 이미지의 투명도
          ></div>
          <div className="absolute top-40 left-20 font-istok-web text-white flex flex-col gap-2 text-left pr-4">
            <p className="text-[85px] font-bold leading-tight text-point-main">
              Backend Developer
            </p>
            <p className="text-[60px] font-bold leading-tight">조은빈</p>
            <p className="text-[30px] leading-tight">
              책임감 있게, 사용자 중심으로 고민하는 개발자가 되겠습니다.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }} // 초기 상태
          whileInView={{ opacity: 1, scale: 1.5 }} // 애니메이션 상태
          exit={{ opacity: 1 }} // 종료 상태
          transition={{ duration: 1 }} // 애니메이션 지속 시간
        ></motion.div>
      </AnimatePresence>

      <div className="absolute left-[30px] bottom-[30px] text-[18px] text-white flex flex-col items-start font-istok-web font-normal">
        <div className="w-full h-full">
          <b>github: </b>
          <span
            onClick={() => openLink(github)}
            className="cursor-pointer underline hover:text-point-main"
          >
            {github}
          </span>
        </div>
        <div>
          <b>blog: </b>
          <span
            onClick={() => openLink(blog)}
            className="cursor-pointer underline hover:text-point-main"
          >
            {blog}
          </span>
        </div>
        <div>
          <b>email: </b> {email}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
