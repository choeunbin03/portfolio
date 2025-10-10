import { Link } from 'react-router-dom';
import openLink from '../../utils/openLink';
import upperFirstLetter from '../../utils/upperFirstLetter';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ProjectComponents = ({ project }) => {
  return (
    // 사진 및 content 감싸는 div
    <div className="w-full h-full 2xl:flex justify-items-center items-center px-[30px] py-[50px]">
      {/* 이미지 div ...이미지는 react-slick 라이브러리 사용해서 슬라이드*/}
      {/* https://velog.io/@wjddma1202/React-Slick%EC%9C%BC%EB%A1%9C-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90 */}
      <div className="w-[300px] h-[200px] md:w-[500px] md:h-[330px] lg:w-[700px] lg:h-[450px] bg-gray-400 2xl:mr-[50px] rounded-sm"></div>
      {/* content 부분 */}
      <div className="h-[100%] py-4 ">
        {/* 프로젝트 이름 부분 */}
        <div className="flex break-keep">
          <p className="text-[25px] md:text-[32px] font-bold flex items-center">
            {project.name} ({project.part})
          </p>
          <p className="text-[14px] md:text-[17px] pl-3 flex items-center">
            - {project.info}
          </p>
        </div>
        {/* 개발 기간 */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] justify-between max-w-[700px] text-[13px] md:text-[15px] text-[#6E6E6E]">
          <div className="flex">
            <p className="font-bold ">개발 기간:&nbsp;</p>
            <p>{project.period}</p>
          </div>
          <p className="border-l-2 border-gray-400 ml-3 pl-3">
            last update: {project.lastUpdate}
          </p>
        </div>
        {/* 개발 인원 */}
        <div className="flex text-[13px] md:text-[15px] text-[#6E6E6E]">
          <p className="font-bold ">개발 인원:&nbsp; </p>
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
          <p className="font-bold text-[14px] md:text-[17px]">담당 파트</p>
          {Object.entries(project.detailPart).map(([key, value]) => {
            if (value && value.length > 0) {
              return (
                <div
                  key={key}
                  className="flex ml-[35px] text-[14px] md:text-[17px]"
                >
                  <p className="font-bold">{key}: </p>
                  <ul className="ml-2 flex flex-col items-start">
                    {value.map((element, index) => (
                      <li
                        key={index}
                        className="grid grid-cols-1 md:gap-6 md:grid-cols-[1fr_auto]"
                      >
                        <p className="break-keep w-[310px]">
                          {index + 1}. {element.partName}
                        </p>
                        <p className="text-gray-500 whitespace-nowrap">
                          (기여도: {element.contribution})
                        </p>
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
        <div className="flex flex-col">
          <p className="font-bold text-[14px] md:text-[17px] break-keep">
            개발 환경{' '}
          </p>
          <ul className="ml-[35px] flex flex-col items-start text-[14px] md:text-[17px] break-keep">
            {project.developEnvironment.map((element, index) => (
              <li key={index}>
                <b>{element.section}:</b> {element.content}
              </li>
            ))}
          </ul>
        </div>
        {/* 자세히 보기 */}
        <Link
          to={`/projects/${project.name.toLowerCase().replace(/\s/g, '-')}`}
          className="
            w-[200px] h-[50px] flex items-center justify-center
            mt-7 rounded-md bg-gradient-to-r from-point-main via-point-main/80 to-point-main/50
            text-white text-[16px] gap-2
            hover:text-point-reverse
          "
        >
          <HiOutlineArrowNarrowRight size={28} strokeWidth={1} />
          <span className="font-bold">자세히 보기</span>
        </Link>

        {/* 링크들 */}
        {/* <div className="flex flex-col items-start">
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
        </div> */}
      </div>
    </div> // 사진 및 content 감싸는 div
  );
};

export default ProjectComponents;
