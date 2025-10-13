const Tranner01Parts = ({ parts }) => {
  if (!parts || parts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      {parts.map((part, index) => (
        <div key={index} className="group">
          {/* 타이틀 - 좌측 accent bar와 함께 */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div className="w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-point-main rounded-full"></div>
            <h4 className="text-[16px] sm:text-[18px] md:text-xl font-semibold text-gray-800">
              <span className="text-point-main mr-2">{index + 1}.</span>
              {part.title}
            </h4>
          </div>

          {/* 이미지 컨테이너 */}
          <div className={`mb-4 sm:mb-5 ${part.images.length > 1 ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5' : 'flex justify-center'}`}>
            {part.images.map((image, imgIndex) => (
              <div 
                key={imgIndex} 
                className="relative overflow-hidden rounded-xl border-2 border-gray-200 h-[300px] sm:h-[350px] md:h-[400px] bg-gray-50 group-hover:border-point-main/30 transition-colors duration-300"
              >
                <img
                  src={`/tranner01/${image}`}
                  alt={`${part.title} - ${imgIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* 설명 박스 */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 sm:p-5 border border-gray-200">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-1 sm:w-1.5 h-1.5 rounded-full bg-point-main"></div>
              <span className="text-[13px] sm:text-[14px] font-semibold text-gray-700">구현 내용</span>
            </div>
            <ul className="space-y-2 sm:space-y-2.5">
              {part.description.map((desc, descIndex) => (
                <li key={descIndex} className="flex items-start group/item">
                  <span className="text-point-main mr-2 sm:mr-3 mt-1 font-bold text-[12px] sm:text-[13px] md:text-sm">▹</span>
                  <span className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] break-keep">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tranner01Parts;
