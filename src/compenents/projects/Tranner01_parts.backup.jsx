const Tranner01Parts = ({ parts }) => {
  if (!parts || parts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-10">
      {parts.map((part, index) => (
        <div key={index} className="flex flex-col">
          {/* 타이틀 */}
          <h4 className="text-lg font-medium text-gray-700 mb-4">
            {index + 1}) {part.title}
          </h4>

          {/* 이미지 */}
          <div className={`mb-4 ${part.images.length > 1 ? 'grid grid-cols-2 gap-4' : 'flex justify-center'}`}>
            {part.images.map((image, imgIndex) => (
              <div key={imgIndex} className="overflow-hidden rounded-lg shadow-md h-[400px]">
                <img
                  src={`/tranner01/${image}`}
                  alt={`${part.title} - ${imgIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* 설명 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="space-y-2">
              {part.description.map((desc, descIndex) => (
                <li key={descIndex} className="text-gray-600 flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>{desc}</span>
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
