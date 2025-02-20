import { useState } from "react";
import css from "./HomePage.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
   const totalSlides = 7;

  const handleClick = () => {
    console.log("Кнопка 'Переглянути' натиснута!");
    // Можна зробити перехід на іншу сторінку, наприклад:
    // window.location.href = "/new-page";
  };

 const nextSlide = () => {
   setActiveIndex((prevIndex) =>
     prevIndex !== null ? (prevIndex + 1) % totalSlides : 0
   );
 };

 const prevSlide = () => {
   setActiveIndex((prevIndex) =>
     prevIndex !== null
       ? (prevIndex - 1 + totalSlides) % totalSlides
       : totalSlides - 1
   );
  };
  
  const handleSearchSubmit = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <>
      <div className={css.holidayTime}>
        <h1 className={css.titleHoliday}>HolidayTime</h1>
        <h2 className={css.subTitle}>
          Автентичний відпочинок серед українського колориту
          <span className={css.spanTitle}>!</span>
        </h2>
      </div>

      <div className={css.reserveContainer}>
        <div className={css.boxForText}>
          <p className={css.textReserve}>
            Полонини Карпат, у селі Орів посеред гір розташувався затишний
            куточок для незабутніх вражень. Справжні українські гори,
            власноручне сироваріння на полонині, водоспади та вікові дерева
            чекають на Вас.
          </p>
        </div>
        <button className={css.arrowLeft} onClick={prevSlide}>
          ❮
        </button>
        <button className={css.arrowRight} onClick={nextSlide}>
          ❯
        </button>

        <div className={css.circleContainer}>
          {[...Array(7)].map((_, index) => (
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
            Переглянути
            <span className={css.arrow}>
              <svg
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
          <svg id="icon-Group-13-1" viewBox="0 0 19 32" width="51" height="101">
            <path
              stroke-linejoin="miter"
              stroke-linecap="butt"
              stroke-miterlimit="4"
              stroke-width="1.3115"
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
              src="/src/img/image2x.jpg"
              alt="Active Vacation"
            ></img>
          </div>
          <div className={css.activeVacationTxt}>
            <p className={css.txtVacantion}>
              Активний відпочинок у нетипових лоцаціях. Незаймана природа та
              місцевий колорит подарують Вам незабутні враження.
            </p>
          </div>
        </div>
      </div>
      <SearchForm onSubmit={handleSearchSubmit} />
    </>
  );
};

export default HomePage;
