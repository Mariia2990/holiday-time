import React, { useRef, useState } from "react";
import Modal from "react-modal";
import css from "./PersonalOffice.module.css";
import person from "../../img/people-2x.jpg";
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

// Тип для даних користувача
interface UserProfile {
  gender: string;
  birthDate: string;
  phone: string;
  email: string;
}

const PersonalOffice: React.FC = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 1. Стейт для аватарки
  const [avatar, setAvatar] = useState<string>(() => {
    return localStorage.getItem("userAvatar") || person;
  });

  // 2. Основний стейт для даних профілю (зчитуємо з localStorage або ставимо порожні)
  const [profile, setProfile] = useState<UserProfile>(() => {
    const savedData = localStorage.getItem("userProfile");
    return savedData
      ? JSON.parse(savedData)
      : { gender: "", birthDate: "", phone: "", email: "" };
  });

  // 3. Стейт для модального вікна та тимчасових даних форми
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserProfile>(profile);

  // Відкриття модалки (заповнюємо форму актуальними даними)
  const openModal = () => {
    setFormData(profile);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // Обробник зміни полів у модальному вікні
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Збереження даних з модалки
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(formData); // Оновлюємо відображення на сторінці
    localStorage.setItem("userProfile", JSON.stringify(formData)); // Зберігаємо в браузері
    closeModal();
  };

  // Зміна аватарки
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
            {/* Ліва частина з аватаркою та кнопками */}
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
                <button className={css.personalOfficeBtn} onClick={openModal}>
                  {t("personalOfficeBtn1")}
                </button>
              </div>
            </div>

            {/* Права частина з відображенням збережених даних */}
            <div className={css.personalOfficeBox3}>
              <div className={css.personalOfficeBd}>
                <p className={css.personalOfficeText}>
                  {t("personalOfficeText1")}
                  <span className={css.personalOfficeTextSpan}>
                    {profile.gender}
                  </span>
                </p>
              </div>
              <span className={css.personalOfficeSpan}></span>

              <div className={css.personalOfficeBd}>
                <p className={css.personalOfficeText}>
                  {t("personalOfficeText2")}{" "}
                  <span className={css.personalOfficeTextSpan}>
                    {profile.birthDate}
                  </span>
                </p>
              </div>
              <span className={css.personalOfficeSpan}></span>

              <div className={css.personalOfficeBd}>
                <p className={css.personalOfficeText}>
                  {t("personalOfficeText3")}{" "}
                  <span className={css.personalOfficeTextSpan}>
                    {profile.phone}
                  </span>
                </p>
              </div>
              <span className={css.personalOfficeSpan}></span>

              <div className={css.personalOfficeBd}>
                <p className={css.personalOfficeText}>
                  {t("personalOfficeText4")}{" "}
                  <span className={css.personalOfficeTextSpan}>
                    {profile.email}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальне вікно для редагування */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={css.modalContent}
        overlayClassName={css.modalOverlay}
        contentLabel="Edit Profile"
      >
        <div className={css.modalHeader}>
          <h3>{t("modalProfile")}</h3>
          <button onClick={closeModal} className={css.modalCloseBtn}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSaveProfile} className={css.modalBody}>
          <label className={css.modalLabel}>
            {t("modalSex")}
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className={css.modalSelect}
            >
              <option className={css.modalSelect} value="">
                {t("modalSex1")}
              </option>
              <option className={css.modalSelect} value="Жіноча">
                {t("modalSex2")}
              </option>
              <option className={css.modalSelect} value="Чоловіча">
                {t("modalSex3")}
              </option>
            </select>
          </label>

          <label className={css.modalLabel}>
            {t("modalLabel1")}
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              className={css.modalInput}
            />
          </label>

          <label className={css.modalLabel}>
            {t("modalLabel2")}
            <input
              type="tel"
              name="phone"
              placeholder="+380..."
              value={formData.phone}
              onChange={handleInputChange}
              className={css.modalInput}
            />
          </label>

          <label className={css.modalLabel}>
            {t("modalLabel3")}
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleInputChange}
              className={css.modalInput}
            />
          </label>

          <div className={css.modalFooter}>
            <button type="submit" className={css.modalSaveBtn}>
              {t("modalSave")}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default PersonalOffice;
