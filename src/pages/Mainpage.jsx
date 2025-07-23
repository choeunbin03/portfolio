import WelcomePage from './WelcomePage';
import MainInfo from './MainInfo';

const MainPage = () => {
  return (
    <div>
      <div className="App bg-[#080808] text-white h-screen ">
        <WelcomePage />
      </div>
      <div className="App bg-point-dark text-black">
        <div className="App bg-gray-50 text-black w-[98%]">
          <MainInfo />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
