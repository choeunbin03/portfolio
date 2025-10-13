import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ProjectComponents = ({ project }) => {
  return (
    <div className="w-full flex flex-col xl:flex-row justify-items-center items-center gap-6 sm:gap-8 px-4 sm:px-6 py-8 sm:py-12 md:py-[50px] mb-8 sm:mb-10 md:mb-12 bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-point-main/30 transition-all duration-300">
      {/* 이미지 */}
      {project.mainImage ? (
        <div className="w-full sm:w-[320px] md:w-[400px] lg:w-[450px] xl:w-[400px] 2xl:w-[500px] h-[200px] sm:h-[200px] md:h-[250px] lg:h-[280px] xl:h-[250px] 2xl:h-[320px] rounded-xl shadow-lg border-2 border-gray-300 overflow-hidden bg-gray-100 flex-shrink-0">
          <img 
            src={project.mainImage} 
            alt={`${project.name} 메인 이미지`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500 text-sm sm:text-base md:text-lg">이미지 준비 중</div>';
            }}
          />
        </div>
      ) : (
        <div className="w-full sm:w-[320px] md:w-[400px] lg:w-[450px] xl:w-[400px] 2xl:w-[500px] h-[200px] sm:h-[200px] md:h-[250px] lg:h-[280px] xl:h-[250px] 2xl:h-[320px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl shadow-lg border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
          <span className="text-gray-500 text-sm sm:text-base md:text-lg">이미지 영역</span>
        </div>
      )}

      {/* Content */}
      <div className="w-full xl:flex-1">
        {/* 프로젝트 이름 */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-0.5 sm:w-1 h-8 sm:h-9 md:h-10 bg-point-main rounded-full"></div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline gap-1 sm:gap-2 break-keep">
            <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-gray-800">
              {project.name} <span className="text-point-main">({project.part})</span>
            </p>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[17px] text-gray-600">
              - {project.info}
            </p>
          </div>
        </div>

        {/* 메타 정보 카드 */}
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border border-gray-200">
          {/* 개발 기간 */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] text-gray-600 mb-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-bold text-point-main text-[14px] sm:text-[16px]">📅</span>
              <span className="font-bold">개발 기간:</span>
              <span>{project.period}</span>
            </div>
            <p className="text-gray-500 text-[10px] sm:text-[11px] md:text-[12px] sm:border-l-2 border-gray-300 sm:ml-3 sm:pl-3">
              last update: {project.lastUpdate}
            </p>
          </div>

          {/* 개발 인원 */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] text-gray-600">
            <span className="font-bold text-point-main text-[14px] sm:text-[16px]">👥</span>
            <span className="font-bold">개발 인원:</span>
            <div className="flex flex-wrap gap-1">
              {Object.entries(project.headCount).map(([key, value]) => {
                if (value) {
                  return (
                    <span key={key} className="bg-point-main/10 px-2 py-0.5 rounded text-[10px] sm:text-[11px] md:text-[12px]">
                      {key}({value}명)
                    </span>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>

        {/* 담당 파트 */}
        <div className="mb-3 sm:mb-4">
          <h4 className="font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
            <span className="text-point-main">▹</span>
            담당 파트
          </h4>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-3 sm:p-4 border border-gray-200">
            {Object.entries(project.detailPart).map(([key, value]) => {
              if (value && value.length > 0) {
                return (
                  <div key={key} className="mb-2 sm:mb-3 last:mb-0">
                    <p className="font-semibold text-point-main mb-1 sm:mb-2 text-[12px] sm:text-[13px] md:text-[14px]">{key}</p>
                    <ul className="ml-2 sm:ml-4 space-y-1 sm:space-y-1.5">
                      {value.map((element, index) => (
                        <li
                          key={index}
                          className="flex flex-col sm:grid sm:grid-cols-[1fr_auto] sm:gap-2 md:gap-4 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px]"
                        >
                          <span className="break-keep text-gray-700">
                            <span className="text-point-main font-bold">{index + 1}.</span> {element.partName}
                          </span>
                          <span className="text-gray-500 text-[10px] sm:text-[11px] md:text-xs whitespace-nowrap ml-4 sm:ml-0">
                            (기여도: {element.contribution})
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
        <div className="mb-4 sm:mb-5 md:mb-6">
          <h4 className="font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
            <span className="text-point-main">▹</span>
            개발 환경
          </h4>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-3 sm:p-4 border border-gray-200">
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
              {project.developEnvironment.map((element, index) => (
                <li key={index} className="text-gray-700 break-keep">
                  <span className="font-semibold text-point-main">{element.section}:</span>{' '}
                  <span>{element.content}</span>
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
            px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg
            bg-gradient-to-r from-point-main to-point-main/80
            text-white font-bold text-[13px] sm:text-[14px] md:text-[16px]
            shadow-lg hover:shadow-xl
            hover:from-point-dark hover:to-point-main
            transition-all duration-300
            active:scale-95
            group
          "
        >
          <span>자세히 보기</span>
          <HiOutlineArrowNarrowRight 
            size={20} 
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectComponents;
