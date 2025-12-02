import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectComponents from '../components/projects/ProjectComponents';
import { userProjects } from '../hooks/useProjects';

const Projects = () => {
  const { project01, project02, project03 } = userProjects();
  const projects = [project01, project02, project03];

  return (
    <div className="w-full h-full flex justify-center items-center px-4 sm:px-6 md:pr-10">
      <div className="w-full md:w-[90%] lg:w-[80%] max-w-[1400px] pt-[100px] sm:pt-[120px] md:pt-[150px]">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <div className="w-1 sm:w-1.5 h-8 sm:h-10 md:h-12 bg-point-main rounded-full"></div>
          <p className="text-[32px] sm:text-[40px] md:text-[50px] text-point-dark font-bold">
            Projects
          </p>
        </div>
        <hr className="border-gray-300 border-t-2" />

        <AnimatePresence>
          <motion.div
            className="w-full flex justify-between mt-8 sm:mt-10 md:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="items-center w-full">
              {/* 최신순으로 정렬 */}
              {[...projects].reverse().map((element, index) => (
                <div key={index}>
                  <ProjectComponents project={element} />
                </div>
              ))}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
