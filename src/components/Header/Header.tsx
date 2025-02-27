import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

interface HeaderProps {
  openMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ openMenu }) => {
  return (
    <header className={css.header}>
      <Navigation openMenu={openMenu} />
    </header>
  );
};

export default Header;
