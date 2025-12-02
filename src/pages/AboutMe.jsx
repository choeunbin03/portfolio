import { motion, AnimatePresence } from 'framer-motion';
import { useAboutMe } from '../hooks/useAboutMe';
import InfoComponents from '../components/aboutMe/InfoComponents';
import AboutMeIntro from '../components/aboutMe/AboutMeIntro';

export default function AboutMe() {
  const { sections } = useAboutMe();

  return (
    <div className="w-full justify-center flex flex-col items-center px-4 sm:px-6 md:pr-10">
      <div className="w-full max-w-[1400px] flex justify-center items-center relative">
        <div className="w-full md:w-[90%] lg:w-[80%] h-full">
          {/* 내 소개 */}
          <div className="h-full pt-[100px] sm:pt-[120px] md:pt-[150px]">
            <AboutMeIntro />
          </div>

          {/* 학력 및 경력 */}
          <div className="h-full mx-0 sm:mx-4 md:mx-8 lg:mx-20 mt-20 sm:mt-8 md:mt-10 mb-20 sm:mb-32 md:mb-40 flex relative">
            <div className="flex flex-col w-full">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 1, x: +50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 1, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="h-full text-left w-full">
                    {Object.entries(sections).map(([key, value]) => {
                      if (value && value.length > 0) {
                        return (
                          <InfoComponents
                            key={key}
                            label={key}
                            contents={value}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
