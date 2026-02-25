import { useState } from "react";
import css from "./HomePage.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useNavigate } from "react-router-dom";
import ActiveVacation from "../../img/image2x.jpg";
import Vacation from "../../img/Group2x.jpg";
import Bakota from "../../img/Bakota-2x.jpg";
import Kyiv from "../../img/Kyiv-2x.jpg";
import Odesa from "../../img/Odesa-2x.jpg";
import Container from "../../components/Container/Container";
import { useTranslation } from "react-i18next";

const slides = [
  { img: Vacation, id: 1 },
  { img: Bakota, id: 2 },
  { img: Kyiv, id: 3 },
  { img: Odesa, id: 4 },
];

const HomePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navigate = useNavigate();

  const { t } = useTranslation();
  
  const handleClick = (): void => {
    console.log("Кнопка 'Переглянути' натиснута!");
    navigate("/reservation");
  };

  const nextSlide = (): void => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleSearchSubmit = (query: string): void => {
    console.log("Searching for:", query);
  };

  return (
    <>
      <Container>
        <div className={css.holidayTime}>
          <h1 className={css.titleHoliday}>{t("welcome_message")}</h1>
          <h2 className={css.subTitle}>
            {t("description")}
            <span className={css.spanTitle}>!</span>
          </h2>
        </div>

        <div className={css.reserveContainer}>
          <div className={css.boxForText}>
            <p className={css.textReserve}>
              {t(`buttonDescription${slides[activeIndex].id}`)}
            </p>
          </div>
          <button className={css.arrowLeft} onClick={prevSlide}>
            ❮
          </button>
          <div className={css.sliderWrapper}>
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.img}
                alt="Slide"
                className={`${css.slideImage} ${
                  activeIndex === index ? css.activeSlide : css.hiddenSlide
                }`}
              />
            ))}
          </div>
          <button className={css.arrowRight} onClick={nextSlide}>
            ❯
          </button>

          <div className={css.circleContainer}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`${css.circle} ${
                  activeIndex === index ? css.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>

          <div className={css.containerBtnRes}>
            <button className={css.buttonRes} onClick={handleClick}>
              {t("buttonReview")}
              <span className={css.arrow}>
                <svg
                  className={css.iconArrow}
                  id="icon-Arrow-1-1"
                  viewBox="0 0 51 32"
                  width="37"
                  height="23"
                  fill="#fff"
                >
                  <path d="M49.926 16.818c0.371-0.376 0.599-0.893 0.599-1.464 0-0.582-0.238-1.109-0.623-1.487l-13.386-13.138c-0.376-0.368-0.892-0.596-1.46-0.596-0.585 0-1.113 0.24-1.492 0.628l-0 0c-0.371 0.376-0.599 0.893-0.599 1.464 0 0.582 0.238 1.109 0.623 1.487l0 0 11.9 11.679-11.712 11.932c-0.371 0.376-0.599 0.893-0.599 1.464 0 0.582 0.238 1.109 0.623 1.487l0 0c0.376 0.368 0.891 0.595 1.459 0.595 0.584 0 1.112-0.24 1.491-0.627l0-0 13.176-13.423zM1.183 17.955l47.272-0.509-0.033-4.174-47.272 0.509 0.033 4.174z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className={css.strokeLine}>
            <svg
              id="icon-Group-13-1"
              viewBox="0 0 19 32"
              width="51"
              height="101"
            >
              <path
                strokeLinejoin="miter"
                strokeLinecap="butt"
                strokeMiterlimit="4"
                strokeWidth="1.3115"
                d="M3.095 2.704l13.126 13.628M2.675 29.43l12.865-13.36"
              ></path>
            </svg>
          </div>
        </div>

        <div className={css.activeVacation}>
          <div className={css.activeVacationCont}>
            <div className={css.activeVacationImg}>
              <img
                className={css.activeVacationImg1}
                src={ActiveVacation}
                alt="Active Vacation"
              />
            </div>
            <div className={css.activeVacationTxt}>
              <p className={css.txtVacantion}>{t("active_vacation_text")}</p>
            </div>
          </div>
        </div>
        <SearchForm onSubmit={handleSearchSubmit} />
      </Container>
    </>
  );
};

export default HomePage;
