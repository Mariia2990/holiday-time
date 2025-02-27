import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import css from "./Navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavigationProps {
  openMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ openMenu }) => {
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
          to="/reservation"
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
        <button
          className={css.openHeaderMenuButton}
          type="button"
          onClick={openMenu}
        >
          <GiHamburgerMenu fill="#fff" size={60} />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
