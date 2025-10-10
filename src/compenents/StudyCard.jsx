import React from 'react';

const StudyCard = ({ title, subtopics }) => {
  return (
    <div className="w-full bg-white rounded-xl p-5 border-2 border-gray-200 shadow-md hover:shadow-xl hover:border-point-main/50 transition-all duration-300 group">
      {/* 타이틀 영역 */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gray-100 group-hover:border-point-main/30 transition-colors">
        <div className="w-1 h-6 bg-point-main rounded-full"></div>
        <h4 className="font-bold text-[17px] text-gray-800 group-hover:text-point-main transition-colors">
          {title}
        </h4>
      </div>

      {/* 컨텐츠 영역 */}
      <ul className="space-y-2.5">
        {subtopics.map((item, index) => (
          <li key={index} className="flex items-start gap-2.5 group/item">
            <span className="text-point-main text-sm mt-0.5 font-bold">▸</span>
            {item.link ? (
              <a 
                href={item.link} 
                className="text-gray-700 text-[15px] hover:text-point-main hover:underline break-keep transition-colors duration-200 leading-relaxed"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            ) : (
              <span className="text-gray-700 text-[15px] break-keep leading-relaxed">
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
