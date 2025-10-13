import { NavLink } from 'react-router-dom';

const linkBase = 'text-[13px] sm:text-[14px] hover:text-point-reverse transition-colors';
const active = 'text-point-reverse font-semibold';

const Header = () => {
  return (
    <header className="z-10 fixed top-0 left-0 right-0 md:right-[80px] bg-point-dark text-white px-4 sm:px-6 py-3 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-0">
        {/* 로고 */}
        <div className="flex items-center">
          <NavLink to="/" className="font-bold text-[24px] sm:text-[30px] text-white">
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
            01.Home
          </NavLink>

          <NavLink
            to="/aboutme"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : ''}`
            }
          >
            02.About&nbsp;me
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : ''}`
            }
          >
            03.Skills
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : ''}`
            }
          >
            04.Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
