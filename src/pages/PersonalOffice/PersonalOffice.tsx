import React from "react";
import css from "./PersonalOffice.module.css";
import person from "../../img/people-2x.jpg";

const PersonalOffice: React.FC = () => {
 
  return (
    <>
      <div className={css.container1}>
      <div className={css.personalOfficeBox}>
        <h2 className={css.personalOfficeTitle}>Особистий кабінет</h2>
        </div>
      </div>
<div className={css.container}>
      <div className={css.personalOfficeContainer}>
        <div className={css.personalOfficeContainer2}>
          <div className={css.personalOfficeBox2}>
            <div>
              <img
                className={css.personalOfficeImg}
                src={person}
                alt="person-avatar"
              ></img>
            </div>

            <div className={css.personalOfficeBtnBox}>
              <button className={css.personalOfficeBtn}>Змінити аватар</button>
              <button className={css.personalOfficeBtn}>Налаштування</button>
            </div>
          </div>

          <div className={css.personalOfficeBox3}>
            <div className={css.personalOfficeBd}>
              <p className={css.personalOfficeText}>Петров Іван Іванович</p>
            </div>
            <span className={css.personalOfficeSpan}></span>
            <div className={css.personalOfficeBd}>
              <p className={css.personalOfficeText}>
                Стать:{" "}
                <span className={css.personalOfficeTextSpan}>чоловіча</span>
              </p>
            </div>
            <span className={css.personalOfficeSpan}></span>
            <div className={css.personalOfficeBd}>
              <p className={css.personalOfficeText}>
                Дата народження:{" "}
                <span className={css.personalOfficeTextSpan}>10.02.1998</span>
              </p>
            </div>
            <span className={css.personalOfficeSpan}></span>
            <div className={css.personalOfficeBd}>
              <p className={css.personalOfficeText}>
                Мобільний телефон:{" "}
                <span className={css.personalOfficeTextSpan}>10.02.1998</span>
              </p>
            </div>
            <span className={css.personalOfficeSpan}></span>
            <div className={css.personalOfficeBd}>
              <p className={css.personalOfficeText}>
                Ел.пошта:{" "}
                <span className={css.personalOfficeTextSpan}>
                  {" "}
                  petrov@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default PersonalOffice;
