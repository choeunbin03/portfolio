import InfoComponents from '../compenents/InfoComponents';

const AboutMe = () => {
  //학력
  const education = [
    {
      content: '숭실대학교 소프트웨어학부',
      period: '2022.03 ~ ',
    },
  ];
  //경력
  const career = [];
  //수상경력
  const award = [];
  //커뮤니티(동아리? 스터디?)
  const community = [];
  //자격증
  const certificate = [];

  const info = {
    education: education,
    career: career,
    award: award,
    community: community,
    certificate: certificate,
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[80%] h-[80%]">
        <div className="">
          <p className="flex items-start ml-5 mb-5 text-[40px] font-bold">
            About Me
          </p>
          <hr />
        </div>
        <div className="h-[90%] flex justify-between">
          <div className="overflow-auto">
            {Object.entries(info).map(([key, value]) => {
              if (value && value.length > 0) {
                return <InfoComponents label={key} contents={value} />;
              }
              return null;
            })}
            <div className="flex flex-col items-start ml-7 mt-5">
              <p className="text-[26px] font-bold">Introduction</p>
              <p className="text-[16px] ml-2 mt-2 flex text-left">
                새로운 기술을 배우는 것에 흥미가 있으며, <br />
                문제점과 발전 방향에 대해서 고민하는 걸 좋아한다. <br />
                같이 성장하며 앞으로 나아갈 동료가 필요하다.
              </p>
            </div>
          </div>
          <div className="w-[25%] flex items-center mr-[80px]">
            <img src="내사진.jpg" className=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
