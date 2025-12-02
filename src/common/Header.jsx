import { NavLink } from 'react-router-dom';

const linkBase =
  'text-[13px] sm:text-[14px] hover:text-point-main hover:font-bold transition-colors whitespace-nowrap';
const active = 'text-point-dark font-bold';

const Header = () => {
  return (
    <header className="z-10 fixed top-0 left-0 right-0 md:right-[80px] bg-white  text-point-dark px-4 mx-10 sm:px-6 py-5 border-b border-point-main/30 ">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-0">
        {/* 로고 */}
        <div className="flex items-center">
          <NavLink
            to="/"
            className="font-bold text-[20px] sm:text-[25px] text-point-dark"
          >
            Eunbin Cho
          </NavLink>
        </div>

        {/* 네비게이션 */}
        <nav className="flex justify-between sm:justify-end gap-2 sm:gap-4">
          <NavLink
            end
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/aboutme"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : ''}`
            }
          >
            About me
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : ''}`
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : ''}`
            }
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
