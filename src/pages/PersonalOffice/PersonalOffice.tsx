import React, { useRef, useState } from "react";
import css from "./PersonalOffice.module.css";
import person from "../../img/people-2x.jpg";
import { useTranslation } from "react-i18next";

const PersonalOffice: React.FC = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [avatar, setAvatar] = useState<string>(() => {
    return localStorage.getItem("userAvatar") || person;
  });

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setAvatar(base64String);
        localStorage.setItem("userAvatar", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Прихований інпут завантаження аватарки */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept="image/*"
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
                />
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
                <label className={css.personalOfficeText}>
                  {t("personalOfficeText1")}
                  <input
                    type="text"
                    className={css.invisibleInput}
                    defaultValue=""
                  />
                </label>
              </div>
              <span className={css.personalOfficeSpan}></span>

              <div className={css.personalOfficeBd}>
                <label className={css.personalOfficeText}>
                  {t("personalOfficeText2")}
                  <input
                    type="text"
                    className={css.invisibleInput}
                    defaultValue=""
                  />
                </label>
              </div>
              <span className={css.personalOfficeSpan}></span>

              <div className={css.personalOfficeBd}>
                <label className={css.personalOfficeText}>
                  {t("personalOfficeText3")}
                  <input
                    type="text"
                    className={css.invisibleInput}
                    defaultValue=""
                  />
                </label>
              </div>
              <span className={css.personalOfficeSpan}></span>

              <div className={css.personalOfficeBd}>
                <label className={css.personalOfficeText}>
                  {t("personalOfficeText4")}
                  <input
                    type="text"
                    className={css.invisibleInput}
                    defaultValue=""
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalOffice;
