import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ProjectComponents = ({ project }) => {
  return (
    <div className="w-full flex flex-col xl:flex-row justify-items-center xl:items-center gap-8 sm:gap-10 lg:gap-12 px-6 sm:px-8 py-8 sm:py-10 md:py-12 mb-8 sm:mb-10 md:mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-point-main/20 transition-all duration-500">
      {/* 이미지 */}
      {project.mainImage ? (
        <div className="w-full xl:w-[420px] 2xl:w-[480px] h-[280px] sm:h-[320px] md:h-[360px] xl:h-[280px] rounded-xl overflow-hidden bg-gray-50 flex-shrink-0 group">
          <img
            src={project.mainImage}
            alt={`${project.name} 메인 이미지`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML =
                '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm">이미지 준비 중</div>';
            }}
          />
        </div>
      ) : (
        <div className="w-full xl:w-[420px] 2xl:w-[480px] h-[280px] sm:h-[320px] md:h-[360px] xl:h-[280px] bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-gray-400 text-sm">이미지 영역</span>
        </div>
      )}

      {/* Content */}
      <div className="w-full xl:flex-1 flex flex-col">
        {/* 프로젝트 헤더 */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-2 flex-wrap">
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-gray-900">
              {project.name}
            </h3>
            <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-point-main">
              {project.part}
            </span>
          </div>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-gray-600">
            {project.info}
          </p>
        </div>

        {/* 메타 정보 - 심플하게 */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 text-[13px] sm:text-[14px] text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-[16px]">📅</span>
            <span>{project.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[16px]">👥</span>
            <div className="flex gap-2">
              {Object.entries(project.headCount).map(([key, value]) => {
                if (value) {
                  return (
                    <span key={key} className="text-gray-700">
                      {key} {value}명
                    </span>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <span className="text-gray-400 text-[12px] sm:text-[13px] ml-auto">
            {project.lastUpdate}
          </span>
        </div>

        {/* 담당 파트 & 개발 환경 - 2열 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-6">
          {/* 담당 파트 */}
          <div>
            <h4 className="font-semibold text-[15px] sm:text-[16px] text-gray-900 mb-3 pb-2 border-b border-gray-200">
              담당 파트
            </h4>
            <div className="space-y-3">
              {Object.entries(project.detailPart).map(([key, value]) => {
                if (value && value.length > 0) {
                  return (
                    <div key={key}>
                      <p className="font-medium text-point-main mb-1.5 text-[13px] sm:text-[14px]">
                        {key}
                      </p>
                      <ul className="space-y-1.5">
                        {value.map((element, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-[12px] sm:text-[13px] text-gray-700"
                          >
                            <span className="text-point-main font-medium mt-0.5">•</span>
                            <span className="flex-1">{element.partName}</span>
                            <span className="text-gray-400 text-[11px] sm:text-[12px] whitespace-nowrap">
                              {element.contribution}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* 개발 환경 */}
          <div>
            <h4 className="font-semibold text-[15px] sm:text-[16px] text-gray-900 mb-3 pb-2 border-b border-gray-200">
              개발 환경
            </h4>
            <ul className="space-y-2">
              {project.developEnvironment.map((element, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[12px] sm:text-[13px] text-gray-700"
                >
                  <span className="font-medium text-point-main whitespace-nowrap">
                    {element.section}
                  </span>
                  <span className="text-gray-600">{element.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 자세히 보기 버튼 */}
        <Link
          to={`/projects/${project.name.toLowerCase().replace(/\s/g, '-')}`}
          className="
            inline-flex items-center justify-center gap-2
            px-6 py-3 rounded-xl
            bg-gradient-to-r from-point-main to-point-main/90
            text-white font-semibold text-[14px] sm:text-[15px]
            hover:shadow-lg hover:from-point-main/90 hover:to-point-main
            transition-all duration-300
            group
            mt-auto
          "
        >
          <span>자세히 보기</span>
          <HiOutlineArrowNarrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectComponents;
