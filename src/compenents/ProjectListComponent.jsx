import formatNumber from '../utils/formatNumber';
import openLink from '../utils/openLink';
import upperFirstLetter from '../utils/upperFirstLetter';

const ProjectListComponents = ({ projects }) => {
  return (
    <div className="w-full items-center justify-center">
      {projects.map((element, index) => (
        <div key={index} className="w-full flex flex-col">
          <div className="flex flex-col md:flex-row justify-center items-center py-[50px]">
            {/* 번호 */}
            <p className="font-bold text-[30px]">{formatNumber(index + 1)}</p>

            {/* 프로젝트 정보 */}
            <div className="mx-[50px] flex flex-col items-center text-center">
              <p className="font-bold text-[35px]">{element.title}</p>
              <p>{element.subtitle}</p>
            </div>

            {/* 아이콘 */}
            <div>
              <img src="arrowPage.svg" className="w-[50px] h-[50px] m-[30px]" />
            </div>

            {/* 상세 정보 */}
            <div className="flex flex-col items-center min-w-[350px] text-center">
              <p>
                {Object.values(element.headCount).reduce((a, b) => a + b, 0)}인
                프로젝트 (
                {Object.entries(element.headCount)
                  .map(
                    ([role, count]) => `${upperFirstLetter(role)}: ${count}인`
                  )
                  .join(', ')}
                ) <br />- <strong>{element.myPart}</strong> 담당
                <br /> 개발기간: {element.period}
              </p>
            </div>
          </div>
          <hr className="w-[70%] mx-auto" />
        </div>
      ))}
    </div>
  );
};

export default ProjectListComponents;
