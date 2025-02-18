import { NavLink, Link } from "react-router-dom";
import css from "./Navigation.module.css";
// import { SiThemoviedatabase } from "react-icons/si";

const Navigation = () => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <Link to="/" className={css.logoLink}>
            <img
              className={css.logoIcon}
              src="/src/img/photo_2021-09-21_13-25-38-2x.jpg"
            />
        </Link>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.isActive : css.link)}
        >
          Головна
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? css.isActive : css.link)}
        >
          Про нас
        </NavLink>
        <NavLink
          to="/reservation/:reservationId/"
          className={({ isActive }) => (isActive ? css.isActive : css.link)}
        >
          Забронювати
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? css.isActive : css.link)}
        >
          Контакти
        </NavLink>
        <NavLink
          to="/office"
          className={({ isActive }) => (isActive ? css.isActive : css.link)}
        >
          Особистий кабінет
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
