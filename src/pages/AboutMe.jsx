import { motion, AnimatePresence } from 'framer-motion';
import { useAboutMe } from '../hooks/useAboutMe';
import InfoComponents from '../compenents/aboutMe/InfoComponents';
import AboutMeIntro from '../compenents/aboutMe/AboutMeIntro';
import TechMarquee from '../compenents/TechMarquee';

export default function AboutMe() {
  const { sections } = useAboutMe();

  return (
    <div className="w-full justify-center flex flex-col items-center pr-10">
      <div className="w-full mx-[120px] flex justify-center items-center relative">
        <div className="w-[80%] h-full">
          {/* 내 소개 */}
          <div className="h-full pt-[150px]">
            <AboutMeIntro />
          </div>
          <div className="absolute mt-[100px] left-0">
            <TechMarquee />
          </div>

          {/* 학력 및 경력 */}
          <div className="h-full mx-20 mt-[200px] mb-40 flex relative">
            <div className=" flex flex-col">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 1, x: +50 }} // 초기 상태
                  whileInView={{ opacity: 1, x: 0 }} // 애니메이션 상태
                  exit={{ opacity: 1, x: -100 }} // 종료 상태
                  transition={{ duration: 0.5 }} // 애니메이션 지속 시간
                  className="w-full"
                >
                  <div className="h-full text-left w-full">
                    {Object.entries(sections).map(([key, value]) => {
                      if (value && value.length > 0) {
                        return <InfoComponents label={key} contents={value} />;
                      }
                      return null;
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <img
              src="3551.jpg"
              className="hidden xl:block w-[350px] 2xl:w-[500px] h-auto absolute right-3 2xl:right-[50px] top-1/2 -translate-y-1/2"
              alt="사진"
            />
          </div>

          {/* 내 강점 및 장점 어필 */}
          <div></div>
          {/* 취미 */}
        </div>
      </div>
      {/* 내 정보 부분_end */}
    </div>
  );
}
