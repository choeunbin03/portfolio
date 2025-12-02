import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectInfo from '../../components/projects/ProjectInfo';
import PhraizParts from '../../components/projects/Phraiz_parts';
import ProjectReview from '../../components/projects/ProjectReview';
import { useProjectData } from '../../hooks/useProjectDetails';

const Phraiz = () => {
  const projectData = useProjectData('Phraiz');
  const [activeDocTab, setActiveDocTab] = useState(0);

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
              {/* 프로젝트 헤더 섹션 */}
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 md:mb-28">
                {/* 왼쪽: 프로젝트 정보 */}
                <div className="w-full lg:w-1/3 flex flex-col justify-center">
                  {/* 프로젝트 제목 */}
                  <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold mb-3 sm:mb-4 leading-tight text-[#702ff3]">
                    {projectData.title}
                  </h1>

                  {/* 부제목 */}
                  <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-gray-700 mb-4 sm:mb-6">
                    {projectData.subtitle}
                  </h2>

                  {/* 간단한 설명 */}
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-6 sm:mb-8 break-keep">
                    {projectData.shortDescription}
                  </p>

                  {/* 개발 기간 및 인원 */}
                  <div className="flex flex-col gap-3 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-point-main/10 flex items-center justify-center">
                        <span className="text-[16px]">📅</span>
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-500 font-medium">개발 기간</p>
                        <p className="text-[13px] sm:text-[14px] font-semibold text-gray-900">
                          {projectData.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-point-main/10 flex items-center justify-center">
                        <span className="text-[16px]">👥</span>
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-500 font-medium">개발 인원</p>
                        <p className="text-[13px] sm:text-[14px] font-semibold text-gray-900">
                          {projectData.team}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 버튼 그룹 - 데스크톱에서만 보이기 */}
                  <div className="hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {projectData.liveUrl && (
                      <a
                        href={projectData.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#702ff3] to-[#702ff3]/80 text-white rounded-lg font-semibold text-[14px] sm:text-[16px] hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <span>사용해보기</span>
                      </a>
                    )}
                    {projectData.githubUrl && (
                      <a
                        href={projectData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold text-[14px] sm:text-[16px] hover:bg-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>보러가기</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* 오른쪽: 메인 이미지 */}
                <div className="w-full lg:w-2/3 flex justify-center items-center">
                  <div className="relative w-full max-w-[900px] rounded-2xl overflow-hidden hover:border-point-main/50 transition-all duration-300">
                    <img
                      src={projectData.mainImage}
                      className="w-full h-auto"
                      alt="프로젝트 메인 이미지"
                    />
                  </div>
                </div>

                {/* 버튼 그룹 - 모바일에서만 보이기 (이미지 아래) */}
                <div className="w-full lg:hidden flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {projectData.liveUrl && (
                    <a
                      href={projectData.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-point-main to-[#8468eb] text-white rounded-lg font-semibold text-[14px] sm:text-[16px] hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <span>사용해보기</span>
                    </a>
                  )}
                  {projectData.githubUrl && (
                    <a
                      href={projectData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold text-[14px] sm:text-[16px] hover:bg-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>보러가기</span>
                    </a>
                  )}
                </div>
              </div>

              {/* 서비스 목표 및 개발 환경 */}
              <div className="h-full mb-12 sm:mb-16 md:mb-20">
                <ProjectInfo
                  serviceGoals={projectData.serviceGoals}
                  devStack={projectData.devStack}
                  serviceGoalTitle={projectData.serviceGoalTitle}
                />
              </div>

              {/* 문서 */}
              <div className="flex flex-col mb-12 sm:mb-16 md:mb-20">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <div className="w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-point-main rounded-full"></div>
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-gray-800">
                    문서
                  </h3>
                </div>

                {/* 문서 탭 네비게이션 */}
                <div className="flex border-b-2 border-gray-200 mb-6">
                  {projectData.documents?.map((doc, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveDocTab(index)}
                      className={`px-4 sm:px-6 py-3 sm:py-4 text-[14px] sm:text-[15px] md:text-base font-medium transition-all duration-300 relative ${
                        activeDocTab === index
                          ? 'text-point-main'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {doc.name}
                      {/* 활성 탭 하단 바 */}
                      {activeDocTab === index && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-point-main">
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-point-main translate-y-full"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* 문서 이미지 */}
                {projectData.documents &&
                  projectData.documents[activeDocTab] && (
                    <div className="flex justify-center bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-md">
                      <div className="w-full max-w-[900px] h-[350px] sm:h-[400px] md:h-[450px] flex items-center justify-center">
                        <img
                          src={projectData.documents[activeDocTab].image}
                          className="w-auto h-full max-w-full object-contain rounded-lg"
                          alt={projectData.documents[activeDocTab].name}
                        />
                      </div>
                    </div>
                  )}
              </div>

              {/* 담당 파트 */}
              <div className="flex flex-col mb-12 sm:mb-16 md:mb-20">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <div className="w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-point-main rounded-full"></div>
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-gray-800">
                    담당 파트
                  </h3>
                </div>
                <PhraizParts parts={projectData.parts} />
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

export default Phraiz;
