import React from 'react';

const StudyCard = ({ title, subtopics }) => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 sm:p-5 border border-gray-200 shadow-md hover:shadow-lg hover:border-point-main/30 transition-all duration-300 group">
      {/* 타이틀 영역 */}
      <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200 group-hover:border-point-main/30 transition-colors">
        <div className="w-0.5 h-4 sm:h-5 bg-point-main rounded-full"></div>
        <h4 className="font-semibold text-[14px] sm:text-[15px] md:text-[16px] text-gray-800 group-hover:text-point-main transition-colors">
          {title}
        </h4>
      </div>

      {/* 컨텐츠 영역 */}
      <ul className="space-y-2 sm:space-y-2.5">
        {subtopics.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-gray-400 text-[11px] sm:text-[12px] mt-0.5">•</span>
            {item.link ? (
              <a 
                href={item.link} 
                className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14px] hover:text-point-main hover:underline break-keep transition-colors duration-200 leading-relaxed"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            ) : (
              <span className="text-gray-700 text-[12px] sm:text-[13px] md:text-[14px] break-keep leading-relaxed">
                {item.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyCard;
