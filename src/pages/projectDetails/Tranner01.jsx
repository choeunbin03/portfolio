import { AnimatePresence, motion } from 'framer-motion';
import ProjectInfo from '../../compenents/projects/ProjectInfo';
import Tranner01Parts from '../../compenents/projects/Tranner01_parts';
import ProjectReview from '../../compenents/projects/ProjectReview';
import { useProjectData } from '../../hooks/useProjectDetails';

const Tranner01 = () => {
  const projectData = useProjectData('Tranner01');

  if (!projectData) {
    return (
      <div className="p-16 text-center text-red-500">
        프로젝트 정보를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div className="w-full h-full justify-center flex flex-col items-center pr-10">
      <div className="w-full mt-[150px] flex justify-center items-center">
        <div className="w-[80%] h-[80%]">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1, y: +30 }} // 초기 상태
              whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
              exit={{ opacity: 1, y: +100 }} // 종료 상태
              transition={{ duration: 0.5 }} // 애니메이션 지속 시간
              className="overflow-hidden h-full justify-between"
            >
              {/* 프로젝트 설명 */}
              <div className="h-full mb-20">
                <ProjectInfo {...projectData} />
              </div>

              {/* 아키텍처 구성도 */}
              <div className="flex flex-col mb-20">
                <h3 className="text-[24px] font-semibold mb-5">
                  아키텍처 구성도
                </h3>
                <div className="flex justify-center">
                  <img src="/tranner01/arch.PNG" className="" alt="사진" />
                </div>
              </div>

              {/* 담당 파트 */}
              <div className="flex flex-col mb-20">
                <h3 className="text-[24px] font-semibold mb-5">담당 파트</h3>
                <Tranner01Parts parts={projectData.parts} />
              </div>

              {/* 회고 */}
              <div className="flex flex-col mb-10">
                <h3 className="text-[22px] font-semibold mb-5">
                  프로젝트 회고
                </h3>
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
