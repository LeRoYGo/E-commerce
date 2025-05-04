import style from './Header.module.scss';
import { Link, NavLink } from 'react-router';
import favorites from '../../assets/favorites.png';
import { useAppSelector } from '../../store/hooks';
import { PATHS } from '../../configs/routes.ts';

const Header = () => {
  const numFavorites = useAppSelector((state) => state.favorites.length);
  const pages = [
    { id: 0, title: 'Products', path: PATHS.products },
    { id: 2, title: 'About us', path: PATHS.aboutUs },
  ];

  return (
    <header className={style.header}>
      <Link to={PATHS.main} className={style.logoWrapper}>
        <img src="/logo.svg" alt="Lalasia logo" />
        <span>Lalasia</span>
      </Link>
      <nav>
        <ul className={style.navList}>
          {pages.map((page) => (
            <li key={page.id}>
              <NavLink
                className={({ isActive }) => (isActive ? style.active : '')}
                to={page.path}
              >
                {page.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.active} ${style.favorites}` : style.favorites
        }
        to={PATHS.favorites}
        data-numfavorites={numFavorites}
      >
        <img src={favorites} />
      </NavLink>
    </header>
  );
};

export default Header;
