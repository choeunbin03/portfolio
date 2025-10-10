const ProjectReview = ({ review }) => {
  if (!review || (!review.challenges && !review.reflection)) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* 기술적 고민 & 해결 과정 */}
      {review.challenges && review.challenges.length > 0 && (
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-point-main">
            💡 기술적 고민 & 해결 과정
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {review.challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-gray-100/50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-point-main text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800 mb-2 leading-snug">
                      {challenge.title}
                    </h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {challenge.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 회고 */}
      {review.reflection && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 배운 점 */}
          {review.reflection.learned && review.reflection.learned.length > 0 && (
            <div className="bg-point-main/5 rounded-lg p-6 border border-point-main/20">
              <h4 className="text-lg font-semibold text-point-main mb-4 flex items-center gap-2">
                <span className="text-2xl">✨</span>
                배운 점
              </h4>
              <ul className="space-y-3">
                {review.reflection.learned.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-point-main font-bold mt-0.5">▸</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 개선하고 싶은 점 */}
          {review.reflection.improvements && review.reflection.improvements.length > 0 && (
            <div className="bg-point-main/5 rounded-lg p-6 border border-point-main/20">
              <h4 className="text-lg font-semibold text-point-main mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                개선하고 싶은 점
              </h4>
              <ul className="space-y-3">
                {review.reflection.improvements.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-point-main font-bold mt-0.5">▸</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectReview;
