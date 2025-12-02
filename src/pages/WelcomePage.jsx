import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const WelcomePage = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-white flex items-center justify-center">
      <AnimatePresence>
        {/* 메인 컨텐츠 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="max-w-8xl">
            {/* 상단 라벨 */}
            <div></div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 mb-8 sm:mb-10"
            >
              <div className="w-12 sm:w-16 h-1 bg-point-main"></div>
              <span className="text-sm sm:text-base font-bold text-point-main tracking-wider">
                PORTFOLIO
              </span>
            </motion.div>

            {/* 메인 컨텐츠 - 2열 레이아웃 */}
            <div className=" grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 sm:gap-6 lg:gap-8 items-end">
              {/* 왼쪽: 타이틀 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="text-left text-[56px] sm:text-[72px] md:text-[88px] lg:text-[100px] xl:text-[110px] font-bold leading-[0.95] text-point-dark mb-6 lg:border-r-4 border-point-dark">
                  Backend
                  <br />
                  Developer
                </h1>
              </motion.div>

              {/* 오른쪽: 이름 및 설명 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-2 sm:space-y-1 lg:pb-6 xl:pb-10 flex-row justify-items-start "
              >
                <div>
                  <div className="text-left">
                    <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-gray-900">
                      조은빈
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg">
                      Cho Eunbin
                    </p>
                  </div>

                  <p className="text-left text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-gray-700">
                    안녕하세요, 개발자 조은빈입니다.
                    <br />
                    책임감 있게,{' '}
                    <span className="font-bold text-gray-900">사용자 중심</span>
                    으로 고민하는 개발자가 되겠습니다.
                  </p>
                </div>

                {/* CTA 버튼 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className=""
                >
                  <Link
                    to="/projects"
                    className="
                  group inline-flex items-center gap-3 
                  px-4 py-2 rounded-xl
                  bg-point-main text-white
                  font-semibold text-[15px] sm:text-[16px]
                  hover:bg-point-dark
                  transition-all duration-300
                  shadow-lg hover:shadow-xl
                  mt-2
                "
                  >
                    <span>See My Projects</span>
                    <HiOutlineArrowNarrowRight
                      size={20}
                      strokeWidth={2.5}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WelcomePage;
