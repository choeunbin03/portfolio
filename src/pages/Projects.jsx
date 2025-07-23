import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectComponents from '../compenents/ProjectComponents';

const Projects = () => {
  //strong
  const project01 = {
    // 사진은 담당 파트 개수만큼 넣고 슬라이드
    name: 'Tranner',
    part: 'FE, BE',
    info: '여행 계획 웹 서비스',
    period: '2024.09.01 ~ 2024.12.15',
    lastUpdate: '2024.12.30',
    headCount: { BE: 3, FE: 2 },
    detailPart: {
      FE: [
        { partName: '회원가입', contribution: '100%' },
        {
          partName: '로그인(카카오 로그인 및 토큰 관리 포함)',
          contribution: '100%',
        },
        { partName: '여행 계획 페이지(google map API)', contribution: '100%' },
        { partName: '배포', contribution: '100%' },
      ],
      BE: [{ partName: '로그인 및 spring security 관련', contribution: '30%' }],
    },
    developEnvironment: [
      { section: '개발 언어', content: 'Java 17 / TypeScript, HTML5, CSS3' },
      { section: 'IDE', content: 'IntelliJ / Visual Studio Code' },
      { section: 'Framework', content: 'Spring Boot / React' },
    ],
    notionLink: 'https://www.notion.so/1-8bb25aff9b8d4fed8cc8da3022b3fcef',
    githubLink: 'https://github.com/SSU-Traveler',
    projectLink: 'https://www.tranner.com',
  };

  const project02 = {
    // 사진은 담당 파트 개수만큼 넣고 슬라이드
    name: 'Tranner0202',
    part: 'FE, BE',
    info: '여행 계획 웹 서비스',
    period: '2024.09.01 ~ 2024.12.15',
    lastUpdate: '2024.12.30',
    headCount: { BE: 3, FE: 2 },
    detailPart: {
      FE: [
        { partName: '회원가입', contribution: '100%' },
        {
          partName: '로그인(카카오 로그인 및 토큰 관리 포함)',
          contribution: '100%',
        },
        { partName: '여행 계획 페이지(google map API)', contribution: '100%' },
        { partName: '배포', contribution: '100%' },
      ],
      BE: [{ partName: '로그인 및 spring security 관련', contribution: '30%' }],
    },
    developEnvironment: [
      { section: '개발 언어', content: 'Java 17 / TypeScript, HTML5, CSS3' },
      { section: 'IDE', content: 'IntelliJ / Visual Studio Code' },
      { section: 'Framework', content: 'Spring Boot / React' },
    ],
    notionLink: 'https://www.notion.so/1-8bb25aff9b8d4fed8cc8da3022b3fcef',
    githubLink: 'https://github.com/SSU-Traveler',
    projectLink: 'https://www.tranner.com',
  };

  const projects = [project01, project02, project01];

  const [currentProject, setCurrentProject] = useState(0); //0은 project01
  const [fade, setFade] = useState(true);

  const handleCurrentProject = (index) => {
    if (currentProject !== index) {
      setFade(false); // Fade out 시작
      setTimeout(() => {
        setCurrentProject(index);
        setFade(true); // Fade in 시작
      }, 300); // Fade out 후 300ms 대기
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[80%] h-[80%]">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1, y: +30 }} // 초기 상태
            whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
            exit={{ opacity: 1, y: +100 }} // 종료 상태
            transition={{ duration: 0.5 }} // 애니메이션 지속 시간
            className=""
          >
            <div>
              <span className="flex items-center w-full">
                {projects.map((_, index) => {
                  const projectNumber = `Project${String(index + 1).padStart(
                    2,
                    '0'
                  )}`;
                  return (
                    <p
                      key={index}
                      className={`flex-1 text-center ml-5 mb-5 text-[40px] font-bold cursor-default ${
                        index === currentProject
                          ? 'text-[#7122fa]'
                          : 'text-[#c9c9c9] hover:text-[#A078F0]'
                      }`}
                      onClick={() => handleCurrentProject(index)}
                    >
                      {projectNumber}
                    </p>
                  );
                })}
              </span>
              <hr />
            </div>
          </motion.div>
          <motion.div
            className="w-full h-[90%] flex justify-between"
            initial={{ opacity: 0 }} // 초기 상태
            whileInView={{ opacity: 1 }} // 애니메이션 상태
            exit={{ opacity: 0 }} // 종료 상태
            transition={{ duration: 2 }} // 애니메이션 지속 시간
          >
            <div className="flex w-full h-full relative">
              <div
                className={`w-full h-full absolute transition-opacity duration-500 ease-in-out ${
                  fade ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <ProjectComponents project={projects[currentProject]} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
