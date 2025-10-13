import React from 'react';

const ProjectInfo = ({
  title,
  description,
  description_point,
  duration,
  team,
  serviceGoals,
  devStack,
}) => {
  return (
    <div className="flex flex-col 2xl:flex-row items-start 2xl:items-center gap-8 sm:gap-12 md:gap-16 2xl:gap-[100px]">
      <div className="w-full">
        {/* 제목 */}
        <div className="w-full mb-4 sm:mb-6">
          <h1 className="text-[28px] sm:text-[35px] md:text-[45px] font-bold leading-tight text-point-dark">
            {title}
          </h1>
        </div>

        <div className="flex flex-col items-start gap-4 sm:gap-5 md:gap-[11px]">
          {/* 프로젝트 설명 */}
          <div>
            <p className="text-[16px] sm:text-[18px] md:text-[22px] text-black break-keep leading-relaxed">
              {description}
            </p>
            <p className="text-[18px] sm:text-[21px] md:text-[25px] text-black font-bold mt-1 sm:mt-2">
              {description_point}
            </p>
          </div>

          {/* 개발 기간 및 인원 그룹 */}
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200 w-full">
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-bold leading-relaxed text-gray-700 mb-1">
              <span className="text-point-main">📅</span> 개발 기간: {duration}
            </p>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-bold leading-relaxed text-gray-700">
              <span className="text-point-main">👥</span> 개발 인원: {team}
            </p>
          </div>

          {/* 서비스 목표 섹션 */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-[15px] sm:text-[16px] md:text-[18px] font-bold text-gray-700 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="text-point-main">▹</span>
              서비스 목표
            </h3>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-4 sm:p-5 md:p-[15px] border border-gray-200 w-full">
              <div className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed text-gray-800 space-y-2 sm:space-y-3">
                {serviceGoals.map((goal, index) => (
                  <div key={index} className="break-keep">
                    <span className="font-bold text-point-main">{goal.title}:</span>
                    <span> {goal.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 개발 환경 섹션 */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-[15px] sm:text-[16px] md:text-[18px] font-bold text-gray-700 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="text-point-main">▹</span>
              개발 환경
            </h3>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-4 sm:p-5 md:p-[15px] border border-gray-200 w-full">
              <div className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed text-gray-800 space-y-1.5 sm:space-y-2">
                {Object.entries(devStack).map(([key, value]) => (
                  <div key={key} className="break-keep">
                    <b className="text-point-main">{key}:</b> {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 이미지 */}
      <div className="w-full 2xl:w-auto">
        <img
          src="/tranner01/main_photo.png"
          className="w-full 2xl:w-[750px] h-auto 2xl:h-[550px] object-contain rounded-xl shadow-lg border-2 border-gray-200"
          alt="프로젝트 메인 이미지"
        />
      </div>
    </div>
  );
};

export default ProjectInfo;
