import style from './Header.module.scss';
import { Link, NavLink } from 'react-router';

const listItems = [
  { id: 0, title: 'Products', path: '/products' },
  { id: 1, title: 'Categories', path: '/categories' },
  { id: 2, title: 'About us', path: '/about-us' },
];

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.logoWrapper}>
        <img src="../../../public/logo.svg" alt="Lalasia logo" />
        <span>Lalasia</span>
      </Link>
      <nav className={style.nav}>
        <ul>
          {listItems.map((obj) => (
            <li key={obj.id}>
              <NavLink
                className={({ isActive }) => (isActive ? style.active : '')}
                to={obj.path}
              >
                {obj.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
