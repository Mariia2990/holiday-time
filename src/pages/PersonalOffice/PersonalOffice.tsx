import React, { useRef, useState } from "react";
import css from "./PersonalOffice.module.css";
import person from "../../img/people-2x.jpg";
import { useTranslation } from "react-i18next";

const PersonalOffice: React.FC = () => {
  const { t } = useTranslation();

  // Реф для доступу до прихованого інпуту
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Стейт для відображення обраної картинки (щоб вона мінялася на екрані)
  const [avatar, setAvatar] = useState<string>(person);

  // Функція, що тригерить вікно вибору файлу
  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  // Функція обробки обраного файлу
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Створюємо тимчасове посилання на файл
      setAvatar(imageUrl);
      // Тут також можна відправити файл на сервер через FormData
    }
  };
  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept="image/*" // Тільки картинки
      />
      <div className={css.container1}>
        <div className={css.personalOfficeBox}>
          <h2 className={css.personalOfficeTitle}>
            {t("personalOfficeTitle")}
          </h2>
        </div>
      </div>
      <div className={css.container}>
        <div className={css.personalOfficeContainer}>
          <div className={css.personalOfficeContainer2}>
            <div className={css.personalOfficeBox2}>
              <div>
                <img
                  className={css.personalOfficeImg}
                  src={avatar}
                  alt="person-avatar"
                ></img>
              </div>

              <div className={css.personalOfficeBtnBox}>
                <button
                  className={css.personalOfficeBtn}
                  onClick={handleEditClick}
                >
                  {t("personalOfficeBtn")}
                </button>
                <button className={css.personalOfficeBtn}>
                  {t("personalOfficeBtn1")}
                </button>
              </div>
            </div>

            <div className={css.personalOfficeBox3}>
              <div className={css.personalOfficeBd}>
                <p className={css.personalOfficeText}></p>
              </div>
              <span className={css.personalOfficeSpan}></span>
              <div className={css.personalOfficeBd}>
                <p className={css.personalOfficeText}>
                  {t("personalOfficeText1")}
                  <span className={css.personalOfficeTextSpan}></span>
                </p>
              </div>
              <span className={css.personalOfficeSpan}></span>
              <div className={css.personalOfficeBd}>
                <p className={css.personalOfficeText}>
                  {t("personalOfficeText2")}{" "}
                  <span className={css.personalOfficeTextSpan}></span>
                </p>
              </div>
              <span className={css.personalOfficeSpan}></span>
              <div className={css.personalOfficeBd}>
                <p className={css.personalOfficeText}>
                  {t("personalOfficeText3")}{" "}
                  <span className={css.personalOfficeTextSpan}></span>
                </p>
              </div>
              <span className={css.personalOfficeSpan}></span>
              <div className={css.personalOfficeBd}>
                <p className={css.personalOfficeText}>
                  {t("personalOfficeText4")}{" "}
                  <span className={css.personalOfficeTextSpan}> </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};;

export default PersonalOffice;
