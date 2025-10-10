import React from 'react';
import upperFirstLetter from '../utils/upperFirstLetter';

const SkillsComponents = ({ label, contents }) => {
  return (
    <div className="flex flex-col items-start ml-7 mt-5">
      <p className="text-[28px] font-bold text-point-main">
        {upperFirstLetter(label)}
      </p>

      {contents.map((skill, index) => (
        <div key={index}>
          <div className="flex ml-2 mt-3 text-[21px] font-bold items-center cursor-default z-10">
            <p className="ml-2">{skill.language}&nbsp;&nbsp;</p>
          </div>
          <div className="w-[400px] ml-2 border-t-2 border-point-main px-2 py-2 mt-2 text-[15px] flex flex-col items-start">
            {skill.detail.split('\n').map((sentence, sIndex) => (
              <p className="break-keep" key={sIndex}>
                {sentence.trim()}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsComponents;
