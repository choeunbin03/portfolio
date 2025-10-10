import React from 'react';
import upperFirstLetter from '../utils/upperFirstLetter';

const SkillsComponents = ({ label, contents }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-8 bg-point-main rounded-full"></div>
        <p className="text-[28px] font-bold text-point-main">
          {upperFirstLetter(label)}
        </p>
      </div>

      <div className="space-y-6 w-full">
        {contents.map((skill, index) => (
          <div key={index} className="group w-full">
            {/* 스킬 타이틀 */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-point-main font-bold text-lg">▹</span>
              <p className="text-[21px] font-bold text-gray-800 cursor-default">
                {skill.language}
              </p>
            </div>
            
            {/* 스킬 상세 내용 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-5 border-l-4 border-point-main shadow-md w-full max-w-[450px] group-hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-2">
                {skill.detail.split('\n').map((sentence, sIndex) => (
                  <p className="break-keep text-gray-700 leading-relaxed text-[15px]" key={sIndex}>
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
