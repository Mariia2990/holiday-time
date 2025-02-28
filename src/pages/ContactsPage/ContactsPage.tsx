import css from "./ContactsPage.module.css";

const ContactsPage = () => {

  return (
    <>
      <div className={css.container1}>
        <div className={css.contactsBox}>
          <h2 className={css.contactsTitle}>Контакти</h2>
        </div>
      </div>
      <div className={css.container}>
        <div className={css.contactsContainer}>
          <div className={css.contactsItem}>
            <h3 className={css.contactsLabel}>Телефон</h3>{" "}
            <span className={css.contactsSpan}></span>
            <p className={css.contactsInfo}>+38(097)119-89-83</p>
          </div>
          <div className={css.contactsItem}>
            <h3 className={css.contactsLabel}>Графік роботи</h3>
            <span className={css.contactsSpan1}></span>
            <p className={css.contactsInfo1}>
              пн-пт 08:00-22:00 <br />
              сб 09:00-21:00 <br />
              нд 10:00-20:00
            </p>
          </div>

          <div className={css.contactsItem}>
            <h3 className={css.contactsLabel}>Ел. пошта</h3>
            <span className={css.contactsSpan2}></span>
            <p className={css.contactsInfo2}>hello@gmail.com</p>
          </div>

          <div className={css.contactsItem}>
            <h3 className={css.contactsLabel2}>Адреса офісу</h3>
            <span className={css.contactsSpan3}></span>
            <p className={css.contactsInfo3}>м. Київ, вул. Малевича, буд. 4</p>
          </div>

          <div className={css.contactsMap}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.482494939795!2d30.52054557608357!3d50.4258744716398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce508afac0ff%3A0x86b85d4e91b33bfb!2z0LLRg9C70LjRhtGPINCT0L7Qs9GA0LDQtNC10YDQvdCwINCb0LXRgdC60L7Qv9C-0LzRgdGM0LrQsCwgNCwg0JrQvtC80L7RgtCwLCDQmtC-0LzQvtGC0L7QtNCw!5e0!3m2!1suk!2sua!4v1708798374000!5m2!1suk!2sua"
              width="100%"
              height="335"
              style={{
                border: "3px solid rgba(0, 0, 0, 0.05)",
                borderRadius: "40px",
                overflow: "hidden",
              }}
              // allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
