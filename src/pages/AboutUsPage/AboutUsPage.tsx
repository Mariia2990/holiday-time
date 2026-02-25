import React from "react";
import css from "./AboutUsPage.module.css";
import Container from "../../components/Container/Container";
import { useTranslation } from "react-i18next";

const AboutUsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={css.aboutUsBox}>
        <h2 className={css.aboutUsTitle}>{t("about")}</h2>
      </div>
      <Container>
        <div className={css.container}>
          <div className={css.aboutUsWrapper}>
            <h2 className={css.aboutUsTitle2}>HolidayTime</h2>
            <div className={css.aboutUsSpanBox}>
              <span className={css.aboutUsSpan}>{t("aboutUsSpan")}</span>
            </div>
          </div>

          <div className={css.aboutUsBox2}>
            <div className={css.aboutUsBoxText}>
              <h3 className={css.aboutUsText}>
                {t("aboutUsText")}
                <p className={css.aboutUsSpanBox1}>
                  <br />
                  {t("aboutUsSpanBox1")}
                  <br />
                  <br />
                </p>
                {t("aboutUsSpanBox2")}
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUsPage;
