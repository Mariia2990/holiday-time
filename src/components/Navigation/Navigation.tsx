import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import css from "./Navigation.module.css";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string>("UA");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  const changeLanguage = (lang: string): void => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={css.navigationContainer}>
      <Link to="/" className={css.logoLink}>
        <img
          className={css.logoIcon}
          src="/src/img/photo_2021-09-21_13-25-38-1x.jpg"
          alt="Logo"
        />
      </Link>
      <nav className={css.nav}>
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

      <div className={css.languageSwitcher1}>
        <a href="#">
            <svg className={css.iconMap } id="icon-map" viewBox="0 0 32 32" width="60" height="60">
            <path
              fill="#fff"
              d="M16 31.738c8.692 0 15.738-7.046 15.738-15.738s-7.046-15.738-15.738-15.738c-8.692 0-15.738 7.046-15.738 15.738s7.046 15.738 15.738 15.738zM16 2.229c1.293 0 2.768 1.161 3.978 3.753 0.427 0.917 0.798 1.971 1.1 3.132h-10.156c0.301-1.161 0.673-2.215 1.102-3.132 1.207-2.593 2.682-3.753 3.976-3.753zM10.24 5.151c-0.53 1.126-0.992 2.449-1.316 3.824l-0.028 0.14h-4.826c1.669-2.848 4.25-5.009 7.335-6.104l0.097-0.030c-0.474 0.649-0.897 1.385-1.263 2.17zM8.509 11.082c-0.24 1.46-0.378 3.143-0.378 4.857l0 0.064v-0.003c0 1.712 0.132 3.368 0.38 4.918h-5.377c-0.573-1.455-0.905-3.141-0.905-4.904v-0.014c0-1.731 0.321-3.391 0.905-4.918h5.374zM8.897 22.885c0.346 1.462 0.801 2.798 1.343 3.964 0.366 0.785 0.789 1.521 1.263 2.17-3.182-1.125-5.763-3.286-7.397-6.069l-0.035-0.065h4.826zM10.922 22.885h10.156c-0.308 1.208-0.685 2.25-1.149 3.244l0.047-0.112c-1.206 2.593-2.681 3.753-3.976 3.753-1.293 0-2.768-1.16-3.977-3.753-0.416-0.882-0.792-1.924-1.070-3.006l-0.028-0.126h-0.002zM21.496 20.918h-10.992c-0.258-1.459-0.406-3.14-0.406-4.854l0-0.067v0.003c0-1.737 0.144-3.394 0.405-4.918h10.992c0.262 1.524 0.405 3.181 0.405 4.918s-0.144 3.394-0.405 4.918zM23.103 22.885h4.826c-1.669 2.849-4.25 5.009-7.336 6.104l-0.097 0.030c0.474-0.649 0.897-1.385 1.263-2.17 0.543-1.166 0.997-2.502 1.343-3.964zM28.868 20.918h-5.379c0.248-1.55 0.38-3.206 0.38-4.918s-0.132-3.368-0.38-4.918h5.377c0.573 1.455 0.905 3.141 0.905 4.904v0.014c0 1.731-0.321 3.391-0.905 4.918h0.002zM20.497 2.981c3.182 1.125 5.763 3.285 7.397 6.069l0.035 0.065h-4.828c-0.352-1.515-0.813-2.837-1.396-4.091l0.053 0.127c-0.386-0.831-0.807-1.543-1.289-2.208l0.026 0.038h0.002z"
            ></path>
          </svg>
        </a>

        <div className={css.languageSwitcher2} ref={dropdownRef}>
          <button className={css.langButton} onClick={toggleDropdown}>
            {selectedLang}
          </button>
          {isOpen && (
            <ul className={css.langList}>
              <li onClick={() => changeLanguage("UA")}>UA</li>
              <li onClick={() => changeLanguage("EN")}>EN</li>
              <li onClick={() => changeLanguage("DE")}>DE</li>
            </ul>
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
