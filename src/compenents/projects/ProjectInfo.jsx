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
    <div className="2xl:flex items-center gap-[100px]">
      <div>
        <div className=" w-full">
          <h1 className="text-[45px] font-bold leading-[58px] text-point-dark mb-2">
            {title}
          </h1>
        </div>

        <div className="flex flex-col items-start p-0 gap-[11px]">
          {/* 프로젝트 설명 */}
          <div className="">
            <p className="text-[22px]  text-black flex-none order-0 break-keep">
              {description}
            </p>
            <p className="text-[25px] text-black font-bold flex-none order-0 mb-3">
              {description_point}
            </p>
          </div>

          {/* 개발 기간 및 인원 그룹 */}
          <div className="flex-none order-1">
            <p className="text-[14px] font-bold leading-[23px] text-[#6E6E6E]">
              개발 기간: {duration}
            </p>
            <p className="text-[14px] font-bold leading-[23px] text-[#6E6E6E]">
              개발 인원: {team}
            </p>
          </div>

          {/* 서비스 목표 섹션 */}
          <div className="flex flex-col items-start p-0 gap-[10px] flex-none order-2">
            <h3 className="text-[18px] font-bold leading-[29px] text-[#6E6E6E] flex-none order-0 self-stretch">
              서비스 목표
            </h3>
            <div className="box-border flex flex-row justify-center items-center p-[15px] gap-[8px] border-t border-[#D9D9D9] flex-none order-1 self-stretch">
              <div className="wtext-[20px] leading-[29px] text-black flex-1">
                {serviceGoals.map((goal, index) => (
                  <div key={index}>
                    <span className="font-bold">{goal.title}:</span>
                    <span className="break-keep"> {goal.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 개발 환경 섹션 */}
          <div className="flex flex-col items-start p-0 gap-[10px] flex-none order-3">
            <h3 className="text-[18px] font-bold leading-[29px] text-[#6E6E6E] flex-none order-0 self-stretch">
              개발 환경
            </h3>
            <div className="box-border flex flex-row justify-center items-center p-[15px] gap-[10px] border-t border-[#D9D9D9] flex-none order-1 self-stretch">
              <div className="text-[15px] leading-[25px] text-black flex-1">
                {Object.entries(devStack).map(([key, value]) => (
                  <div key={key}>
                    <b>{key} :</b> {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full 2xl:w-auto mt-8 2xl:mt-0">
        <img
          src="/tranner01/main_photo.png"
          className="w-full 2xl:w-[750px] h-auto 2xl:h-[550px] object-contain rounded-lg shadow-lg"
          alt="프로젝트 메인 이미지"
        />
      </div>
    </div>
  );
};

export default ProjectInfo;
