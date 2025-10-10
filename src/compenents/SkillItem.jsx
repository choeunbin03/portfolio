import React, { useState } from 'react';

const SkillItem = ({ skill }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="flex ml-2 mt-3 text-[20px] items-center cursor-pointer z-10"
      >
        {isOpened ? (
          <i className="xi-angle-down-min"></i>
        ) : (
          <i className="xi-angle-right-min"></i>
        )}
        <p className="ml-2">{skill.language}&nbsp;&nbsp;</p>
      </div>
      <div
        className={`w-[400px] ml-2 border-t-2 border-point-main px-2 py-2 mt-2 text-[14px] flex flex-col items-start transition-all duration-300 ease-in-out ${
          isOpened
            ? 'max-h-60 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {skill.detail.split('\n').map((sentence, sIndex) => (
          <p key={sIndex}>{sentence.trim()}</p>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
