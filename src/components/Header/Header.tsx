import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

interface HeaderProps {
  openMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ openMenu }) => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation openMenu={openMenu} />
      </div>
    </header>
  );
};

export default Header;
