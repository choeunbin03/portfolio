import React from 'react';
import upperFirstLetter from '../utils/upperFirstLetter';

const SkillsComponents = ({ label, contents }) => {
  return (
    <section className="flex flex-col items-start w-full h-full">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
        <div className="w-0.5 h-5 sm:h-6 bg-point-main rounded-full"></div>
        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-point-main">
          {upperFirstLetter(label)}
        </h3>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 sm:p-5 md:p-6 border border-gray-200 shadow-md w-full flex-1">
        <ul className="space-y-4 sm:space-y-5 w-full">
          {contents.map((skill, index) => (
            <li
              key={index}
              className="pb-4 sm:pb-5 border-b border-gray-200 last:border-b-0 last:pb-0"
            >
              {/* 스킬 타이틀 */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="text-point-main font-bold text-[14px] sm:text-[15px]">▸</span>
                <p className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-gray-800">
                  {skill.language}
                </p>
              </div>
              
              {/* 스킬 상세 내용 */}
              <div className="space-y-1.5 sm:space-y-2 pl-5 sm:pl-6">
                {skill.detail.split('\n').map((sentence, sIndex) => (
                  <p 
                    className="break-keep text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px]" 
                    key={sIndex}
                  >
                    <span className="text-gray-400 mr-2">•</span>
                    {sentence.trim()}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsComponents;
