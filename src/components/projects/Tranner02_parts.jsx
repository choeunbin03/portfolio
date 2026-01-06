const Tranner02Parts = ({ parts }) => {
  if (!parts || parts.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* 단일 카드 */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
        <ul className="space-y-3 sm:space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
            <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
              Spring Cloud Eureka 기반 MSA 아키텍처 설계 및 구현
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
            <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
              AWS ECS 기반 멀티 서버 컨테이너 배포
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
            <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
              JWT + OAuth 2.0 기반 인증/인가 시스템 구현
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
            <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
              Redis 캐싱을 통한 외부 API 호출 최적화
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
            <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
              Google Places API 연동 및 여행지 검색 기능 구현
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tranner02Parts;
