import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectComponents from '../compenents/projects/ProjectComponents';
import { userProjects } from '../hooks/useProjects';

const Projects = () => {
  //strong
  const { project01, project02, project03 } = userProjects();
  const projects = [project01, project02, project03];

  return (
    <div className="w-full h-full flex justify-center items-center pr-10">
      <div className="w-[80%] h-full pt-[150px]">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-12 bg-point-main rounded-full"></div>
          <p className="text-[50px] text-point-dark font-bold">Projects</p>
        </div>
        <hr className="border-gray-300 border-t-2" />
        <AnimatePresence>
          <motion.div
            className="w-full h-[90%] flex justify-between"
            initial={{ opacity: 0 }} // 초기 상태
            whileInView={{ opacity: 1 }} // 애니메이션 상태
            exit={{ opacity: 0 }} // 종료 상태
            transition={{ duration: 1 }} // 애니메이션 지속 시간
          >
            <span className="items-center w-full">
              {/* 최신순으로 정렬 */}
              {[...projects].reverse().map((element, index) => (
                <div key={index}>
                  <ProjectComponents project={element} />
                </div>
              ))}
            </span>
            <hr />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
