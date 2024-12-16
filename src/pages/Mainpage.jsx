const MainPage = () => {

  const github = "https://github.com/choeunbin03";
  const blog = "https://codstudy.tistory.com/";
  const email = "choeunbiin03@naver.com";

  return(
    <div>
      <div>
        <p>매일 성장하는 개발자</p>
        <p>조은빈입니다.</p>
        <p>지식을 공유하며,<br/>배움을 즐기며,<br/>효율을 추구합니다.</p>
      </div>
      <div>
        github: {github}
        blog: {blog}
        email: {email}
      </div>
    </div>
  )

};

export default MainPage;
