import React from "react";
import css from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={css.footer}>
      <p className={css.footerText}>© 2021 HolidayTime. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
