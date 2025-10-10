import { NavLink } from 'react-router-dom';

const linkBase = 'mx-4 text-[14px] hover:text-point-reverse';
const active = 'text-point-reverse font-semibold';

const Header = () => {
  return (
    <div>
      <header className="z-10 sm:h-[100px] md:h-[65px] fixed md:flex items-end justify-between bg-point-dark text-white px-6 py-2 left-0 right-[80px]">
        <div className="flex items-end">
          <NavLink to="/" className="font-bold text-[30px] text-white mr-3">
            Eunbin Cho
          </NavLink>
        </div>
        <nav className="flex">
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
      </header>
    </div>
  );
};

export default Header;
