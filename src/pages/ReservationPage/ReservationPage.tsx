import { Outlet, useNavigate, useParams } from "react-router-dom";
import css from "./ReservationPage.module.css";
import { useState } from "react";
import LocationDropdown from "../../components/LocationDropdown/LocationDropdown";

const locations = [
  { id: 1, name: "Незвідана Бакота" },
  { id: 2, name: "Полонини Карпат" },
  { id: 3, name: "Автентична Київщина" },
  { id: 4, name: "Нетипова Одещина" },
];

const ReservationPage = () => {
  const { reservationId } = useParams();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false); // Закриваємо меню після вибору
    navigate(`/reservation/${location.id}`); // Перехід на сторінку бронювання
  };
  return (
    <>
      {!reservationId ? (
        <>
          <div className={css.reservationBox}>
            <h2 className={css.resTitle}>Забронювати будиночок</h2>
          </div>

          <div className={css.reservationBox2}>
            <div className={css.subReserve}>
              <h3 className={css.reservText}>Оберіть місцерозташування</h3>
            </div>
            <div className={css.iconRect}>
              <button
                className={css.iconRectBtn}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <svg
                  width="30"
                  height="25"
                  viewBox="0 0 30 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 25L29.7224 0.25H0.277568L15 25Z" fill="black" />
                </svg>
                {isDropdownOpen && (
              <LocationDropdown onSelect={handleLocationSelect} />
            )}
              </button>
              
            </div>

            
          </div>

          <div className={css.reserveHouse}>
            <div className={css.reserveHouseContainer}>
              <div className={css.reserveHouseBakotaBox}>
                <img
                  className={css.bakotaImg}
                  src="/src/img/Bakota-2x.jpg"
                  alt="Bakota Vacation"
                />
              </div>
              <div className={css.reserveHouseBakotaBox1}>
                <div className={css.titleBakotaBox}>
                  <h3 className={css.titleBakota}>Незвідана Бакота</h3>
                </div>
                <span className={css.lineBakota}></span>
                <div className={css.reserveHouseBakotaBox2}>
                  <p className={css.textBakota}>
                    У Хмельницькій області розташований загублений край -
                    Бакота. Мальовничий каньйон з давньою історією захоплює
                    своїми просторами та незвичною атмосферою. Бджільництво,
                    свіжий мед із польових трав, дотик до природи.
                  </p>
                </div>
              </div>

              <div className={css.star}>
                <button className={css.btnStar}>
                  <svg
                    id="icon-image"
                    viewBox="0 0 32 32"
                    width="50"
                    height="50"
                  >
                    <path
                      fill="#fff"
                      d="M31 12.6h-11.45l-3.55-11.101-3.55 11.1h-11.45l9.25 6.851-3.501 11.050 9.251-6.849 9.25 6.85-3.55-11.1 9.3-6.8z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className={css.buttonReserveBox}>
                <button
                  className={css.buttonReserve}
                  onClick={() => navigate("/reservation/1")}
                >
                  Детальніше
                </button>
              </div>
            </div>
          </div>

          <div className={css.reserveHouse}>
            <div className={css.reserveHouseContainer}>
              <div className={css.reserveHouseBakotaBox}>
                <img
                  className={css.bakotaImg}
                  src="/src/img/Group2x.jpg"
                  alt="Karpaty Vacation"
                />
              </div>
              <div className={css.reserveHouseBakotaBox1}>
                <div className={css.titleBakotaBox}>
                  <h3 className={css.titleBakota}>Полонини Карпат </h3>
                </div>
                <span className={css.lineBakota}></span>
                <div className={css.reserveHouseBakotaBox2}>
                  <p className={css.textBakota}>
                    Полонини Карпат, у селі Орів посеред гір розташувався
                    затишний куточок для незабутніх вражень. Справжні українські
                    гори, власноручне сироваріння на полонині, водоспади та
                    вікові дерева чекають на Вас.
                  </p>
                </div>
              </div>

              <div className={css.star}>
                <button className={css.btnStar}>
                  <svg
                    id="icon-image"
                    viewBox="0 0 32 32"
                    width="50"
                    height="50"
                  >
                    <path
                      fill="#fff"
                      d="M31 12.6h-11.45l-3.55-11.101-3.55 11.1h-11.45l9.25 6.851-3.501 11.050 9.251-6.849 9.25 6.85-3.55-11.1 9.3-6.8z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className={css.buttonReserveBox}>
                <button
                  className={css.buttonReserve}
                  onClick={() => navigate("/reservation/2")}
                >
                  Детальніше
                </button>
              </div>
            </div>
          </div>

          <div className={css.reserveHouse}>
            <div className={css.reserveHouseContainer}>
              <div className={css.reserveHouseBakotaBox}>
                <img
                  className={css.bakotaImg}
                  src="/src/img/Kyiv-2x.jpg"
                  alt="Kyiv Vacation"
                />
              </div>
              <div className={css.reserveHouseBakotaBox1}>
                <div className={css.titleBakotaBox}>
                  <h3 className={css.titleBakota}>Автентична Київщина</h3>
                </div>
                <span className={css.lineBakota}></span>
                <div className={css.reserveHouseBakotaBox2}>
                  <p className={css.textBakota}>
                    Неподалік центра Києва розташувалось автентичне українське
                    село на території однойменного села Пирогово. Дерев’яні
                    млини, запашний хліб, приготовлений своїми руками,
                    українські пісні та багато іншого чекає на вас уже зараз.
                  </p>
                </div>
              </div>

              <div className={css.star}>
                <button className={css.btnStar}>
                  <svg
                    id="icon-image"
                    viewBox="0 0 32 32"
                    width="50"
                    height="50"
                  >
                    <path
                      fill="#fff"
                      d="M31 12.6h-11.45l-3.55-11.101-3.55 11.1h-11.45l9.25 6.851-3.501 11.050 9.251-6.849 9.25 6.85-3.55-11.1 9.3-6.8z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className={css.buttonReserveBox}>
                <button
                  className={css.buttonReserve}
                  onClick={() => navigate("/reservation/3")}
                >
                  Детальніше
                </button>
              </div>
            </div>
          </div>

          <div className={css.reserveHouse}>
            <div className={css.reserveHouseContainer}>
              <div className={css.reserveHouseBakotaBox}>
                <img
                  className={css.bakotaImg}
                  src="/src/img/Odesa-2x.jpg"
                  alt="Odesa Vacation"
                />
              </div>
              <div className={css.reserveHouseBakotaBox1}>
                <div className={css.titleBakotaBox}>
                  <h3 className={css.titleBakota}>Нетипова Одещина</h3>
                </div>
                <span className={css.lineBakota}></span>
                <div className={css.reserveHouseBakotaBox2}>
                  <p className={css.textBakota}>
                    В Одеській області знаходиться мальовниче містечко Вилкове.
                    Його ще називають «українською Венецією». Вилкове - це
                    містечко на воді, весь в каналах. Розташоване в місці, де
                    зустрічаються річка Дунай і Чорне море. Люди пересуваються
                    переважно човнами. Нетипове українське село не залишить Вас
                    без вражень.
                  </p>
                </div>
              </div>

              <div className={css.star}>
                <button className={css.btnStar}>
                  <svg
                    id="icon-image"
                    viewBox="0 0 32 32"
                    width="50"
                    height="50"
                  >
                    <path
                      fill="#fff"
                      d="M31 12.6h-11.45l-3.55-11.101-3.55 11.1h-11.45l9.25 6.851-3.501 11.050 9.251-6.849 9.25 6.85-3.55-11.1 9.3-6.8z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className={css.buttonReserveBox}>
                <button
                  className={css.buttonReserve}
                  onClick={() => navigate("/reservation/4")}
                >
                  Детальніше
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default ReservationPage;
