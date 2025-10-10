import { Link } from 'react-router-dom';
import openLink from '../utils/openLink';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import TechMarquee from '../compenents/TechMarquee';

const WelcomePage = () => {
  return (
    <div className="w-full h-screen relative">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }} // 초기 상태
          whileInView={{ opacity: 1 }} // 애니메이션 상태
          exit={{ opacity: 1 }} // 종료 상태
          transition={{ duration: 0.5 }} // 애니메이션 지속 시간
        >
          <div className="absolute lg:top-60 top-40 left-20 font-istok-web text-black-b1 flex flex-col gap-2 text-left pr-4">
            <p className="text-[85px] font-bold leading-tight text-point-main">
              Backend Developer
            </p>
            <p className="text-[50px] font-bold leading-tight">조은빈</p>
            <p className="text-[25px] leading-tight">
              책임감 있게, 사용자 중심으로 고민하는 개발자가 되겠습니다.
            </p>
            <div className="w-[200px] h-[40px] mt-3 rounded-md bg-point-main flex items-center justify-center text-white text-[16px]">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-white hover:underline"
              >
                <HiOutlineArrowNarrowRight size={28} strokeWidth={1} />
                <span>See My Projects</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute left-0 right-0 bottom-20">
        <TechMarquee />
      </div>

      <div
        class="pointer-events-none absolute inset-0 
              bg-[repeating-linear-gradient(90deg,transparent,transparent_calc(16.66%-1px),rgba(0,0,0,0.05)_calc(16.66%-1px),rgba(0,0,0,0.05)_16.66%)]"
      ></div>
    </div>
  );
};

export default WelcomePage;
