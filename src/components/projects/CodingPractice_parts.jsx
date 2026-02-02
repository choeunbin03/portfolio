const CodingPractice_parts = ({ parts }) => {
  if (!parts || parts.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {parts.map((part, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-gray-800">
              {part.title}
            </span>
          </div>
          <ul className="space-y-2.5 sm:space-y-3">
            {part.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-point-main mt-1 flex-shrink-0">•</span>
                <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
                  {desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CodingPractice_parts;
