import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import TechMarquee from '../compenents/TechMarquee';

const WelcomePage = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* 배경 패턴 */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_calc(16.66%-1px),rgba(0,0,128,0.03)_calc(16.66%-1px),rgba(0,0,128,0.03)_16.66%)]"></div>

      {/* 장식적 요소들 */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-point-main/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-32 w-96 h-96 bg-point-reverse/10 rounded-full blur-3xl"></div>

      <AnimatePresence>
        {/* 메인 컨텐츠 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute lg:top-60 top-40 left-8 sm:left-12 md:left-20 font-istok-web text-black-b1 flex flex-col gap-4 text-left pr-4 z-10"
        >
          {/* 작은 라벨 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="w-12 h-0.5 bg-point-main"></div>
            <span className="text-sm font-semibold text-point-main tracking-wider uppercase">
              Portfolio 2025
            </span>
          </motion.div>

          {/* 메인 타이틀 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-2"
          >
            <h1 className="text-[70px] sm:text-[85px] lg:text-[95px] font-bold leading-none">
              <span className="text-point-main">Backend</span>
              <br />
              <span className="text-gray-800">Developer</span>
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-1 h-16 bg-point-main rounded-full"></div>
              <div>
                <p className="text-[40px] sm:text-[50px] font-bold leading-tight text-gray-800">
                  조은빈
                </p>
                <p className="text-gray-600 text-sm font-medium mt-1">
                  Cho Eunbin
                </p>
              </div>
            </div>
          </motion.div>

          {/* 서브 타이틀 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-[16px] sm:text-[23px] leading-relaxed text-gray-700 max-w-[600px] mt-2"
          >
            책임감 있게,{' '}
            <span className="font-semibold text-point-main">사용자 중심</span>
            으로 고민하는 개발자가 되겠습니다.
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6"
          >
            <Link
              to="/projects"
              className="
                group inline-flex items-center gap-3 
                px-8 py-4 rounded-xl
                bg-gradient-to-r from-point-main to-point-dark
                text-white font-bold text-[18px]
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                hover:scale-105
              "
            >
              <span>See My Projects</span>
              <HiOutlineArrowNarrowRight
                size={28}
                strokeWidth={2}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* 소셜 링크나 추가 정보 (선택사항) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex items-center gap-4 mt-8 text-gray-600"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-point-main transition-colors duration-200"
            >
              {/* GitHub 아이콘 필요시 추가 */}
            </a>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Tech Stack Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute left-0 right-0 bottom-10 z-0"
      >
        <TechMarquee />
      </motion.div>
    </div>
  );
};

export default WelcomePage;
