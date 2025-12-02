import React from 'react';

const ProjectInfo = ({ serviceGoals, devStack, serviceGoalTitle }) => {
  return (
    <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
      {/* 서비스 목표 섹션 */}
      <div className="flex flex-col items-center w-full text-center mt-10 mb-16">
        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-gray-900 mb-3 sm:mb-4">
          서비스 목표
        </h3>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 mb-8 sm:mb-10 md:mb-12">
          {serviceGoalTitle || '효율적이고 편리한 서비스를 제공합니다'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 w-full">
          {serviceGoals.map((goal, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* 아이콘 */}
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 text-white text-[32px] sm:text-[40px] mb-5 sm:mb-6 mx-auto">
                {goal.icon || '✨'}
              </div>

              {/* 제목 */}
              <h4 className="text-[16px] sm:text-[17px] md:text-[19px] font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {goal.title}
              </h4>

              {/* 설명 */}
              <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 leading-relaxed break-keep">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 개발 환경 섹션 */}
      <div className="flex flex-col items-start w-full">
        <h3 className="text-[20px] sm:text-[22px] md:text-[26px] font-bold text-gray-900 mb-6 sm:mb-7 md:mb-8">
          개발 환경
        </h3>
        <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-md w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {Object.entries(devStack).map(([key, value]) => (
              <div key={key} className="flex items-start gap-3 break-keep">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-point-main mt-2"></div>
                <div className="flex-1">
                  <span className="text-[12px] sm:text-[13px] md:text-[14px] font-bold text-gray-900 block mb-1">
                    {key}
                  </span>
                  <p className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-600 leading-relaxed">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
