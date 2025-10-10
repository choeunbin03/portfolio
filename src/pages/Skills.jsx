import { useState } from 'react';
import SkillsComponents from '../compenents/SkillsComponents';
import { motion, AnimatePresence } from 'framer-motion';
import { useSkills } from '../hooks/useSkills';
import { useStudy } from '../hooks/useStudy';
import StudyCard from '../compenents/StudyCard';

const Skills = () => {
  const { strong, knowledgeable, experienced } = useSkills();
  const { backend, database, devops, productivity } = useStudy(); // 데이터 가져오기

  return (
    <div className="w-full h-full justify-center flex flex-col items-center pr-10">
      {/* Skill 부분_start */}
      <div className="w-full mt-[150px] flex justify-center items-center">
        <div className="w-[80%] h-[80%]">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1, y: +30 }} // 초기 상태
              whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
              exit={{ opacity: 1, y: +100 }} // 종료 상태
              transition={{ duration: 0.5 }} // 애니메이션 지속 시간
              className="overflow-hidden"
            >
              <div className="">
                <p className="flex items-start pl-5 text-[50px] text-point-dark font-bold w-full pb-2 h-[85px]">
                  Skills
                </p>
                <hr className="border-gray-350 border-t-2" />
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1, y: +30 }} // 초기 상태
              whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
              exit={{ opacity: 1, y: +100 }} // 종료 상태
              transition={{ duration: 0.5 }} // 애니메이션 지속 시간
              className="overflow-hidden h-[90%] flex justify-between"
            >
              <motion.div
                className="flex"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, staggerChildren: 0.5 }}
              >
                <div className="flex justify-between w-full">
                  <SkillsComponents label="strong" contents={strong} />
                  <SkillsComponents
                    label="knowledgeable"
                    contents={knowledgeable}
                  />
                  <SkillsComponents
                    label="experienced"
                    contents={experienced}
                  />
                </div>
              </motion.div>
              <hr />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Skill 부분_end */}
      {/* Study 부분_start */}
      <div className="w-full mt-[50px] mb-[100px] flex justify-center items-center">
        <div className="w-[80%] h-[80%]">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1, y: +30 }} // 초기 상태
              whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
              exit={{ opacity: 1, y: +100 }} // 종료 상태
              transition={{ duration: 0.5 }} // 애니메이션 지속 시간
              className="overflow-hidden"
            >
              <div className="">
                <p className="flex items-start pl-5 text-[50px] text-point-dark font-bold w-full pb-2 h-[85px]">
                  Study
                </p>
                <hr className="border-gray-350 border-t-2" />
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1, y: +30 }} // 초기 상태
              whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
              exit={{ opacity: 1, y: +100 }} // 종료 상태
              transition={{ duration: 0.5 }} // 애니메이션 지속 시간
              className="flex flex-wrap justify-between w-full mt-10"
            >
              <div className="flex flex-col items-center w-1/4 p-4">
                <h3 className="font-bold text-[22px] text-point-main mb-4">
                  Java & Spring
                </h3>
                <div className="w-[270px] flex flex-col items-center justify-center bg-white shadow-xl border border-gray-100 rounded-xl gap-[15px] py-4">
                  {backend.map((item, index) => (
                    <StudyCard
                      key={index}
                      title={item.title}
                      subtopics={item.subtopics}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center w-1/4 p-4">
                <h3 className="font-bold text-[22px] text-point-main mb-4">
                  DB
                </h3>
                <div className="w-[270px] flex flex-col items-center justify-center bg-white shadow-xl border border-gray-100 rounded-xl gap-[15px] py-4">
                  {database.map((item, index) => (
                    <StudyCard
                      key={index}
                      title={item.title}
                      subtopics={item.subtopics}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center w-1/4 p-4">
                <h3 className="font-bold text-[20px] text-point-main mb-4">
                  클라우드 & CI/CD
                </h3>
                <div className="w-[270px] flex flex-col items-center justify-center bg-white shadow-xl border border-gray-100 rounded-xl gap-[15px] py-4">
                  {devops.map((item, index) => (
                    <StudyCard
                      key={index}
                      title={item.title}
                      subtopics={item.subtopics}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center w-1/4 p-4">
                <h3 className="font-bold text-[20px] text-point-main mb-4">
                  AI & 생산성 향상
                </h3>
                <div className="w-[270px] flex flex-col items-center justify-center bg-white shadow-xl border border-gray-100 rounded-xl gap-[15px] py-4">
                  {productivity.map((item, index) => (
                    <StudyCard
                      key={index}
                      title={item.title}
                      subtopics={item.subtopics}
                    />
                  ))}
                </div>
              </div>
              <hr />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Skill 부분_end */}
        {/* Study 부분 */}
      </div>
    </div>
  );
};

export default Skills;
