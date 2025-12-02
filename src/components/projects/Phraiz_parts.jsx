import { useState } from 'react';

const PhraizParts = ({ parts }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!parts || parts.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* 탭 네비게이션 */}
      <div className="flex border-b-2 border-gray-200 mb-6 sm:mb-8">
        {parts.map((part, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 sm:px-6 py-3 sm:py-4 text-[14px] sm:text-[15px] md:text-base font-medium transition-all duration-300 relative ${
              activeTab === index
                ? 'text-point-main'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {part.title}
            {/* 활성 탭 하단 바 */}
            {activeTab === index && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-point-main">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-point-main translate-y-full"></div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* 선택된 탭 콘텐츠 */}
      <div className="group">
        {/* 이미지 컨테이너 */}
        <div
          className={`mb-4 sm:mb-6 ${
            parts[activeTab].images.length > 1
              ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'
              : 'flex justify-center'
          }`}
        >
          {parts[activeTab].images.map((image, imgIndex) => (
            <div
              key={imgIndex}
              className="relative overflow-hidden rounded-xl border border-gray-200 shadow-md h-[300px] sm:h-[350px] md:h-[400px] bg-gray-50 hover:shadow-lg hover:border-point-main/50 transition-all duration-300"
            >
              <img
                src={`/tranner01/${image}`}
                alt={`${parts[activeTab].title} - ${imgIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* 설명 박스 */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 sm:p-5 md:p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-1 sm:w-1.5 h-1.5 rounded-full bg-point-main"></div>
            <span className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-gray-700">
              구현 내용
            </span>
          </div>
          <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
            {parts[activeTab].description.map((desc, descIndex) => (
              <li key={descIndex} className="flex items-start group/item">
                <span className="text-point-main mr-2 sm:mr-3 mt-1 font-bold text-[12px] sm:text-[13px] md:text-sm">
                  ▹
                </span>
                <span className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] break-keep">
                  {desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhraizParts;
