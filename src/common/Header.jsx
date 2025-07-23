import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="z-10 w-full fixed flex items-end justify-between bg-point-dark text-white px-3 py-1">
        <div className="flex items-end">
          <p className="font-bold text-[20px] text-point-reverse mr-3">
            portfolio |
          </p>
          <p>Eunbin Cho</p>
        </div>
        <div className="flex">
          <p className="mx-3 hover:text-point-reverse">About me</p>
          <p className="mx-3 hover:text-point-reverse">Skills</p>
          <p className="mx-3 hover:text-point-reverse">Projects</p>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Header;
