import React from 'react';
import upperFirstLetter from '../utils/upperFirstLetter';

const SkillsComponents = ({ label, contents }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
        <div className="w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-point-main rounded-full"></div>
        <p className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-point-main">
          {upperFirstLetter(label)}
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full">
        {contents.map((skill, index) => (
          <div key={index} className="group w-full">
            {/* 스킬 타이틀 */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-point-main font-bold text-[15px] sm:text-[16px] md:text-lg">▹</span>
              <p className="text-[17px] sm:text-[19px] md:text-[21px] font-bold text-gray-800 cursor-default">
                {skill.language}
              </p>
            </div>
            
            {/* 스킬 상세 내용 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 sm:p-5 border-l-4 border-point-main shadow-md w-full max-w-[450px] group-hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-1.5 sm:space-y-2">
                {skill.detail.split('\n').map((sentence, sIndex) => (
                  <p className="break-keep text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px]" key={sIndex}>
                    <span className="text-point-main mr-2">•</span>
                    {sentence.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponents;
