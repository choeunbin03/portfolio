const ProjectReview = ({ review }) => {
  if (!review || (!review.challenges && !review.reflection)) {
    return null;
  }

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 기술적 고민 & 해결 과정 */}
      {review.challenges && review.challenges.length > 0 && (
        <div>
          <h4 className="text-[16px] sm:text-[18px] md:text-xl font-semibold text-gray-800 mb-4 sm:mb-5 md:mb-6 pb-2 border-b-2 border-point-main">
            💡 기술적 고민 & 해결 과정
          </h4>
          <div className="space-y-6 sm:space-y-8">
            {review.challenges.map((challenge, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className="w-full md:w-[85%] lg:w-[80%] bg-white rounded-lg p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl sm:text-3xl flex-shrink-0">
                      {challenge.icon || '🔧'}
                    </span>
                    <h5 className="font-bold text-gray-900 text-[15px] sm:text-[16px] md:text-lg leading-snug flex-1">
                      {challenge.title}
                    </h5>
                  </div>

                  <div className="space-y-3 text-gray-600">
                    {challenge.description && (
                      <p className="text-[13px] sm:text-[14px] leading-relaxed break-keep">
                        - {challenge.description}
                      </p>
                    )}
                    {challenge.solution && (
                      <p className="text-[13px] sm:text-[14px] leading-relaxed break-keep">
                        - {challenge.solution}
                      </p>
                    )}
                    {/* 기존 content도 호환되도록 유지 */}
                    {challenge.content &&
                      !challenge.description &&
                      !challenge.solution && (
                        <p className="text-[13px] sm:text-[14px] leading-relaxed break-keep">
                          {challenge.content}
                        </p>
                      )}
                  </div>

                  {/* 블로그 링크 */}
                  {challenge.links && challenge.links.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
                      {challenge.links.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] sm:text-[13px] text-blue-600 hover:text-blue-800 hover:underline transition-colors inline-flex items-center gap-1"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 배운 점 */}
      {review.reflection?.learned && review.reflection.learned.length > 0 && (
        <div>
          <h4 className="text-[16px] sm:text-[18px] md:text-xl font-semibold text-gray-800 mb-4 sm:mb-5 md:mb-6 pb-2 border-b-2 border-point-main">
            💡 배운 점
          </h4>
          <div className="relative pl-8 sm:pl-10">
            {/* 타임라인 세로선 */}
            <div className="absolute left-[11px] sm:left-[13px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-point-main via-point-main/50 to-point-main/20"></div>

            <div className="space-y-6 sm:space-y-7">
              {review.reflection.learned.map((item, index) => (
                <div key={index} className="relative">
                  {/* 타임라인 점 */}
                  <div className="absolute -left-8 sm:-left-10 top-1.5 w-5 h-5 sm:w-6 sm:h-6 bg-point-main rounded-full border-4 border-white shadow-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* 내용 */}
                  <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-point-main/50 transition-all">
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-700 leading-relaxed break-keep">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 개선하고 싶은 점 */}
      {review.reflection?.improvements &&
        review.reflection.improvements.length > 0 && (
          <div>
            <h4 className="text-[16px] sm:text-[18px] md:text-xl font-semibold text-gray-800 mb-4 sm:mb-5 md:mb-6 pb-2 border-b-2 border-point-main">
              💡 개선하고 싶은 점
            </h4>
            <div className="relative pl-8 sm:pl-10">
              {/* 타임라인 세로선 */}
              <div className="absolute left-[11px] sm:left-[13px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200"></div>

              <div className="space-y-6 sm:space-y-7">
                {review.reflection.improvements.map((item, index) => (
                  <div key={index} className="relative">
                    {/* 타임라인 점 */}
                    <div className="absolute -left-8 sm:-left-10 top-1.5 w-5 h-5 sm:w-6 sm:h-6 bg-orange-400 rounded-full border-4 border-white shadow-md flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    {/* 내용 */}
                    <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all">
                      <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-700 leading-relaxed break-keep">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default ProjectReview;
