import { useState } from 'react';
import SkillsComponents from '../compenents/SkillsComponents';
import { motion, AnimatePresence } from 'framer-motion';
import { useSkills } from '../hooks/useSkills';
import { useStudy } from '../hooks/useStudy';
import StudyCard from '../compenents/StudyCard';

const Skills = () => {
  const { strong, knowledgeable, experienced } = useSkills();
  const { backend, database, devops, productivity } = useStudy();

  return (
    <div className="w-full h-full justify-center flex flex-col items-center px-4 sm:px-6 md:pr-10">
      {/* Skill 부분_start */}
      <div className="w-full mt-[100px] sm:mt-[120px] md:mt-[150px] flex justify-center items-center">
        <div className="w-full md:w-[90%] lg:w-[80%] max-w-[1400px]">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1, y: +30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: +100 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="w-1 sm:w-1.5 h-8 sm:h-10 md:h-12 bg-point-main rounded-full"></div>
                <p className="text-[32px] sm:text-[40px] md:text-[50px] text-point-dark font-bold">
                  Skills
                </p>
              </div>
              <hr className="border-gray-300 border-t-2" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1, y: +30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: +100 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden flex justify-center mt-6 sm:mt-8"
            >
              <motion.div
                className="w-full flex justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, staggerChildren: 0.5 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full">
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Skill 부분_end */}

      {/* Study 부분_start */}
      <div className="w-full mt-[40px] sm:mt-[50px] mb-[80px] sm:mb-[100px] flex justify-center items-center">
        <div className="w-full md:w-[90%] lg:w-[80%] max-w-[1400px]">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1, y: +30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: +100 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="w-1 sm:w-1.5 h-8 sm:h-10 md:h-12 bg-point-main rounded-full"></div>
                <p className="text-[32px] sm:text-[40px] md:text-[50px] text-point-dark font-bold">
                  Study
                </p>
              </div>
              <hr className="border-gray-300 border-t-2" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1, y: +30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: +100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full mt-8 sm:mt-10"
            >
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] text-point-main mb-4">
                  Java & Spring
                </h3>
                <div className="w-full max-w-[280px] flex flex-col items-center justify-center gap-[15px]">
                  {backend.map((item, index) => (
                    <StudyCard
                      key={index}
                      title={item.title}
                      subtopics={item.subtopics}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] text-point-main mb-4">
                  DB
                </h3>
                <div className="w-full max-w-[280px] flex flex-col items-center justify-center gap-[15px]">
                  {database.map((item, index) => (
                    <StudyCard
                      key={index}
                      title={item.title}
                      subtopics={item.subtopics}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] text-point-main mb-4">
                  클라우드 & CI/CD
                </h3>
                <div className="w-full max-w-[280px] flex flex-col items-center justify-center gap-[15px]">
                  {devops.map((item, index) => (
                    <StudyCard
                      key={index}
                      title={item.title}
                      subtopics={item.subtopics}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] text-point-main mb-4">
                  AI & 생산성 향상
                </h3>
                <div className="w-full max-w-[280px] flex flex-col items-center justify-center gap-[15px]">
                  {productivity.map((item, index) => (
                    <StudyCard
                      key={index}
                      title={item.title}
                      subtopics={item.subtopics}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Skills;
