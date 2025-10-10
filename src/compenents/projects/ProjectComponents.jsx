import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ProjectComponents = ({ project }) => {
  return (
    <div className="w-full h-full 2xl:flex justify-items-center items-center px-[30px] py-[50px] gap-8">
      {/* 이미지 */}
      <div className="w-[300px] h-[200px] md:w-[500px] md:h-[330px] lg:w-[700px] lg:h-[450px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl shadow-lg border-2 border-gray-300 flex items-center justify-center">
        <span className="text-gray-500 text-lg">이미지 영역</span>
      </div>

      {/* Content */}
      <div className="h-[100%] py-4 flex-1">
        {/* 프로젝트 이름 */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-10 bg-point-main rounded-full"></div>
          <div className="flex flex-wrap items-baseline break-keep gap-2">
            <p className="text-[25px] md:text-[32px] font-bold text-gray-800">
              {project.name} <span className="text-point-main">({project.part})</span>
            </p>
            <p className="text-[14px] md:text-[17px] text-gray-600">
              - {project.info}
            </p>
          </div>
        </div>

        {/* 메타 정보 카드 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
          {/* 개발 기간 */}
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-2 text-[13px] md:text-[15px] text-gray-600 mb-2">
            <div className="flex items-center">
              <span className="font-bold text-point-main mr-2">📅</span>
              <span className="font-bold">개발 기간:</span>
              <span className="ml-2">{project.period}</span>
            </div>
            <p className="md:border-l-2 border-gray-300 md:ml-3 md:pl-3 text-gray-500">
              last update: {project.lastUpdate}
            </p>
          </div>

          {/* 개발 인원 */}
          <div className="flex items-center text-[13px] md:text-[15px] text-gray-600">
            <span className="font-bold text-point-main mr-2">👥</span>
            <span className="font-bold">개발 인원:</span>
            <div className="ml-2 flex flex-wrap gap-1">
              {Object.entries(project.headCount).map(([key, value]) => {
                if (value) {
                  return (
                    <span key={key} className="bg-point-main/10 px-2 py-0.5 rounded">
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
        <div className="mb-4">
          <h4 className="font-bold text-[16px] md:text-[18px] text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-point-main">▹</span>
            담당 파트
          </h4>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-4 border border-gray-200">
            {Object.entries(project.detailPart).map(([key, value]) => {
              if (value && value.length > 0) {
                return (
                  <div key={key} className="mb-3 last:mb-0">
                    <p className="font-semibold text-point-main mb-2">{key}</p>
                    <ul className="ml-4 space-y-1.5">
                      {value.map((element, index) => (
                        <li
                          key={index}
                          className="grid grid-cols-1 md:gap-4 md:grid-cols-[1fr_auto] text-[14px] md:text-[16px]"
                        >
                          <span className="break-keep text-gray-700">
                            <span className="text-point-main font-bold">{index + 1}.</span> {element.partName}
                          </span>
                          <span className="text-gray-500 text-sm whitespace-nowrap">
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
        <div className="mb-6">
          <h4 className="font-bold text-[16px] md:text-[18px] text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-point-main">▹</span>
            개발 환경
          </h4>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-4 border border-gray-200">
            <ul className="space-y-2 text-[14px] md:text-[16px]">
              {project.developEnvironment.map((element, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-semibold text-point-main">{element.section}:</span>{' '}
                  <span className="break-keep">{element.content}</span>
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
            px-6 py-3 rounded-lg
            bg-gradient-to-r from-point-main to-point-main/80
            text-white font-bold text-[16px]
            shadow-lg hover:shadow-xl
            hover:from-point-dark hover:to-point-main
            transition-all duration-300
            group
          "
        >
          <span>자세히 보기</span>
          <HiOutlineArrowNarrowRight 
            size={24} 
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectComponents;
