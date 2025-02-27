import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import css from "./ModalHeader.module.css";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

interface ModalHeaderProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ isOpen, onClose }) => {
  const location = useLocation(); 


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);


  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]); 

  const handleNavLinkClick = () => {
    onClose();
  };

  return (
    <div
      className={`${css.menuHeader} ${isOpen ? css.isOpen : ""}`}
      onClick={onClose}
    >
      <div className={css.menuHeaderOpen} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} type="button" onClick={onClose}>
          <IoClose size={30} />
        </button>
        <nav className={css.nav}>
          <NavLink to="/" onClick={handleNavLinkClick}>
            Головна
          </NavLink>
          <NavLink to="/about-us" onClick={handleNavLinkClick}>
            Про нас
          </NavLink>
          <NavLink to="/reservation" onClick={handleNavLinkClick}>
            Забронювати
          </NavLink>
          <NavLink to="/contacts" onClick={handleNavLinkClick}>
            Контакти
          </NavLink>
          <NavLink to="/office" onClick={handleNavLinkClick}>
            Особистий кабінет
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default ModalHeader;
