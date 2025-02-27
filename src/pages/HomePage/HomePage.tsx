import { useState } from "react";
import css from "./HomePage.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    img: "/src/img/Group2x.jpg",
    text: "Полонини Карпат, у селі Орів посеред гір розташувався затишний куточок для незабутніх вражень. Справжні українські гори, власноручне сироваріння на полонині, водоспади та вікові дерева чекають на Вас.",
  },

  {
    img: "/src/img/Bakota-2x.jpg",
    text: "У Хмельницькій області розташований загублений край -Бакота. Мальовничий каньйон з давньою історією захоплюєсвоїми просторами та незвичною атмосферою. Бджільництво,свіжий мед із польових трав, дотик до природи.",
  },

  {
    img: "/src/img/Kyiv-2x.jpg",
    text: "Неподалік центра Києва розташувалось автентичне українське село на території однойменного села Пирогово. Дерев’яні млини, запашний хліб, приготовлений своїми руками, українські пісні та багато іншого чекає на вас уже зараз.",
  },

  {
    img: "/src/img/Odesa-2x.jpg",
    text: "В Одеській області знаходиться мальовниче містечко Вилкове. Його ще називають «українською Венецією». Вилкове - це містечко на воді, весь в каналах. Розташоване в місці, де зустрічаються річка Дунай і Чорне море. Люди пересуваються переважно човнами. Нетипове українське село не залишить Вас без вражень.",
  },
];

const HomePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const totalSlides: number = 7;
  const navigate = useNavigate(); 

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
      <div className={css.container}>
        <div className={css.holidayTime}>
          <h1 className={css.titleHoliday}>HolidayTime</h1>
          <h2 className={css.subTitle}>
            Автентичний відпочинок серед українського колориту
            <span className={css.spanTitle}>!</span>
          </h2>
        </div>

        <div className={css.reserveContainer}>
          <div className={css.boxForText}>
            <p className={css.textReserve}>{slides[activeIndex].text}</p>
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
              Переглянути
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
                src="/src/img/image2x.jpg"
                alt="Active Vacation"
              />
            </div>
            <div className={css.activeVacationTxt}>
              <p className={css.txtVacantion}>
                Активний відпочинок у нетипових локаціях. Незаймана природа та
                місцевий колорит подарують Вам незабутні враження.
              </p>
            </div>
          </div>
        </div>
        <SearchForm onSubmit={handleSearchSubmit} />
      </div>
    </>
  );
};

export default HomePage;
