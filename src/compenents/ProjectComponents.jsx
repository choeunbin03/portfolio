import openLink from '../utils/openLink';
import upperFirstLetter from '../utils/upperFirstLetter';

const ProjectComponents = ({ project }) => {
  return (
    // 사진 및 content 감싸는 div
    <div className="w-full h-full flex justify-center items-start px-[50px] py-[80px]">
      {/* 이미지 div ...이미지는 react-slick 라이브러리 사용해서 슬라이드*/}
      {/* https://velog.io/@wjddma1202/React-Slick%EC%9C%BC%EB%A1%9C-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90 */}
      <div className="w-[50%] h-[100%] bg-gray-400 mr-[50px]"></div>
      {/* content 부분 */}
      <div className="h-[100%] overflow-hidden py-2">
        {/* 프로젝트 이름 부분 */}
        <div className="flex">
          <p className="text-[28px] font-bold flex items-center">
            {project.name} ({project.part})
          </p>
          <p className="ml-5 border-l-4 border-gray-600 pl-1 flex items-center">
            {project.info}
          </p>
        </div>
        {/* 개발 기간 */}
        <div className="flex justify-between">
          <div className="flex">
            <p className="font-bold text-[18px]">개발 기간:&nbsp;</p>
            <p>{project.period}</p>
          </div>
          <p className="border-l-2 border-gray-400 pl-3">
            last update: {project.lastUpdate}
          </p>
        </div>
        {/* 개발 인원 */}
        <div className="flex">
          <p className="font-bold text-[18px]">개발 인원:&nbsp; </p>
          {Object.entries(project.headCount).map(([key, value]) => {
            if (value) {
              return (
                <p key={key} className="mr-1">
                  {key}({value}명)
                </p>
              );
            }
            return null;
          })}
        </div>
        {/* 담당 파트 */}
        <div className="flex flex-col items-start">
          <p className="font-bold text-[18px]">담당 파트:</p>
          {Object.entries(project.detailPart).map(([key, value]) => {
            if (value && value.length > 0) {
              return (
                <div key={key} className="flex ml-[55px]">
                  <p className="font-bold">{key}: </p>
                  <ul className="ml-2 flex flex-col items-start">
                    {value.map((element, index) => (
                      <li key={index}>
                        {index + 1}. {element.partName} (기여도:{' '}
                        {element.contribution})
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </div>
        {/* 개발 환경 */}
        <div className="flex">
          <p className="font-bold text-[18px]">개발 환경: </p>
          <ul className="ml-3 flex flex-col items-start">
            {project.developEnvironment.map((element, index) => (
              <li key={index}>
                <b>{element.section}:</b> {element.content}
              </li>
            ))}
          </ul>
        </div>
        {/* 링크들 */}
        <div className="flex flex-col items-start">
          {project.notionLink && (
            <div>
              <b>notion: </b>
              <span
                onClick={() => openLink(project.notionLink)}
                className="cursor-pointer underline hover:text-[#A078F0]"
              >
                {project.notionLink}
              </span>
            </div>
          )}
          {project.githubLink && (
            <div>
              <b>github: </b>
              <span
                onClick={() => openLink(project.githubLink)}
                className="cursor-pointer underline hover:text-[#A078F0]"
              >
                {project.githubLink}
              </span>
            </div>
          )}
          {project.projectLink && (
            <div>
              <b>project: </b>
              <span
                onClick={() => openLink(project.projectLink)}
                className="cursor-pointer underline hover:text-[#A078F0]"
              >
                {project.projectLink}
              </span>
            </div>
          )}
        </div>
      </div>
    </div> // 사진 및 content 감싸는 div
  );
};

export default ProjectComponents;
