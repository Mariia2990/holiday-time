import css from "./AboutUsPage.module.css";


const AboutUsPage = () => {
  return (
    <>
      <div className={css.aboutUsBox}>
        <h2 className={css.aboutUsTitle}>Про нас</h2>
      </div>
      <div className={css.aboutUsWrapper}>
        <h2 className={css.aboutUsTitle2}>HolidayTime</h2>
        <div className={css.aboutUsSpanBox}>
          <span className={css.aboutUsSpan}>
            Відпочинок, емоції, враження, нетипові маршрути, неймовірні локації
            - це все про сільський еко-туризм в Україні
          </span>
        </div>
      </div>

      <div className={css.aboutUsBox2}>
        <p className={css.aboutUsText}>
          Наша команда зібрала найколоритніші місця нашої країни саме для тебе.
          <div className={css.aboutUsSpanBox1}>
            <br />
            Місія нашої компанії подарувати незабутні враження та показати
            Україну з іншої сторони. Пройти разом з Вами лісовими стежками, щоб
            попоїсти свіжого карпатського сиру. Пірнути у каньйон та побачити
            занурене під товщу років село Бакота. Покататись на гандолах в
            “українській Венеції”.
            <br />
            <br />
          </div>
          Пізнати Україну разом!
        </p>
      </div>
    </>
  );
};


export default AboutUsPage;
