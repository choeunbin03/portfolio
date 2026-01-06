const PhraizParts = ({ parts }) => {
  if (!parts || parts.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* 단일 카드 */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
        {/* 팀장 역할 섹션 */}
        <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-gray-800">
              팀장 역할
            </span>
          </div>
          <ul className="space-y-2.5 sm:space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-point-main mt-1 flex-shrink-0">•</span>
              <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
                WBS 작성 및 일정 관리
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-point-main mt-1 flex-shrink-0">•</span>
              <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
                Slack을 통한 로그 전송 시스템 구축
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-point-main mt-1 flex-shrink-0">•</span>
              <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
                팀 미팅 주도 및 진행 상황 모니터링
              </span>
            </li>
          </ul>
        </div>

        {/* 기술 담당 섹션 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-gray-800">
              기술 담당
            </span>
          </div>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
              <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
                GPT API 호출을 위한 프롬프트 템플릿 구조화 및 설계
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
              <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
                AWS EC2/RDS 배포 및 Docker·Nginx 환경 구성
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
              <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
                GitHub Actions를 통한 CI/CD 파이프라인 구축
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
              <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
                서버 장애 대응 및 트러블슈팅
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
              <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
                재사용 가능한 공통 모듈 설계 및 구현
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
              <span className="text-gray-700 text-[14px] sm:text-[15px] md:text-base leading-relaxed break-keep">
                토스 페이먼츠 기반 구독 결제 API 구현
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhraizParts;
