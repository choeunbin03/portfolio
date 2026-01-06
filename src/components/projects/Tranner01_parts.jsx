const Tranner01Parts = ({ parts }) => {
  if (!parts || parts.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-8 sm:space-y-10 md:space-y-12">
      {parts.map((part, index) => (
        <div key={index} className="group">
          {/* 파트 제목 */}
          <div className="mb-4 sm:mb-5">
            <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-point-main rounded-full"></span>
              {part.title}
            </h3>
          </div>

          {/* 이미지 그리드 */}
          <div
            className={`mb-4 sm:mb-5 ${
              part.images.length > 1
                ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'
                : 'flex justify-center'
            }`}
          >
            {part.images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="relative overflow-hidden rounded-xl border border-gray-200 shadow-sm h-[280px] sm:h-[320px] md:h-[360px] bg-white hover:shadow-lg hover:border-point-main/30 transition-all duration-300"
              >
                <img
                  src={`/tranner01/${image}`}
                  alt={`${part.title} - ${imgIndex + 1}`}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}
          </div>

          {/* 설명 영역 */}
          <div className="space-y-2 sm:space-y-2.5">
            {part.description.map((desc, descIndex) => (
              <div
                key={descIndex}
                className="flex items-start gap-2.5 sm:gap-3 bg-gray-50/50 rounded-lg p-3 sm:p-3.5 hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-point-main font-bold text-[14px] sm:text-[15px] mt-0.5 flex-shrink-0">
                  •
                </span>
                <span className="text-gray-700 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed break-keep">
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tranner01Parts;
