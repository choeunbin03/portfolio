import { AnimatePresence, motion } from 'framer-motion';
import ProjectInfo from '../../compenents/projects/ProjectInfo';
import Tranner01Parts from '../../compenents/projects/Tranner01_parts';
import ProjectReview from '../../compenents/projects/ProjectReview';
import { useProjectData } from '../../hooks/useProjectDetails';

const Tranner01 = () => {
  const projectData = useProjectData('Tranner01');

  if (!projectData) {
    return (
      <div className="p-8 sm:p-12 md:p-16 text-center text-red-500">
        프로젝트 정보를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div className="w-full h-full justify-center flex flex-col items-center px-4 sm:px-6 md:pr-10">
      <div className="w-full max-w-[1400px] mt-[100px] sm:mt-[120px] md:mt-[150px] flex justify-center items-center">
        <div className="w-full md:w-[90%] lg:w-[80%]">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1, y: +30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: +100 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden h-full"
            >
              {/* 프로젝트 설명 */}
              <div className="h-full mb-12 sm:mb-16 md:mb-20">
                <ProjectInfo {...projectData} />
              </div>

              {/* 아키텍처 구성도 */}
              <div className="flex flex-col mb-12 sm:mb-16 md:mb-20">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <div className="w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-point-main rounded-full"></div>
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-gray-800">
                    아키텍처 구성도
                  </h3>
                </div>
                <div className="flex justify-center bg-white rounded-xl p-4 sm:p-6 shadow-lg border-2 border-gray-200">
                  <img 
                    src="/tranner01/arch.PNG" 
                    className="w-full h-auto max-w-full rounded-lg" 
                    alt="아키텍처 구성도" 
                  />
                </div>
              </div>

              {/* 담당 파트 */}
              <div className="flex flex-col mb-12 sm:mb-16 md:mb-20">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <div className="w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-point-main rounded-full"></div>
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-gray-800">
                    담당 파트
                  </h3>
                </div>
                <Tranner01Parts parts={projectData.parts} />
              </div>

              {/* 회고 */}
              <div className="flex flex-col mb-10 sm:mb-12 md:mb-16">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <div className="w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-point-main rounded-full"></div>
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-gray-800">
                    프로젝트 회고
                  </h3>
                </div>
                <ProjectReview review={projectData.review} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Tranner01;
