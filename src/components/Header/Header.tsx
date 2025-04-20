import style from './Header.module.scss';
import { Link, NavLink } from 'react-router';

const pages = [
  { id: 0, title: 'Products', path: '/products' },
  { id: 1, title: 'Categories', path: '/categories' },
  { id: 2, title: 'About us', path: '/about-us' },
];

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.logoWrapper}>
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
    </header>
  );
};

export default Header;
