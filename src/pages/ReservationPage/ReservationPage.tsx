import { Outlet, useNavigate, useParams } from "react-router-dom";
import css from "./ReservationPage.module.css";
import { useState } from "react";
import LocationDropdown from "../../components/LocationDropdown/LocationDropdown";
import Karpaty from "../../img/Group2x.jpg";
import Kyiv from "../../img/Kyiv-2x.jpg";
import Odesa from "../../img/Odesa-2x.jpg";
import Bakota from "../../img/Bakota-2x.jpg";
import { useTranslation } from "react-i18next";

interface Location {
  id: number;
  // name: string;
}

const ReservationPage: React.FC = () => {
const { reservationId } = useParams<{ reservationId?: string }>();
const navigate = useNavigate();
const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { t } = useTranslation();

const handleLocationSelect = (location: Location) => {
  setIsDropdownOpen(false);
  navigate(`/reservation/${location.id}`);
  };
  
  return (
    <>
      {!reservationId ? (
        <>
          <div className={css.container1}>
            <div className={css.reservationBox}>
              <h2 className={css.resTitle}>{t("reservation")}</h2>
            </div>
          </div>
          <div className={css.container}>
            <div className={css.reservationBox2}>
              <div className={css.subReserve}>
                <h3 className={css.reservText}>{t("resTitle")}</h3>
              </div>
              <div className={css.iconRect}>
                <button
                  className={css.iconRectBtn}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <svg
                    className={css.iconRectBtn1}
                    width="30"
                    height="25"
                    viewBox="0 0 30 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 25L29.7224 0.25H0.277568L15 25Z"
                      fill="black"
                    />
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
                    src={Bakota}
                    alt="Bakota Vacation"
                  />
                </div>
                <div className={css.reserveHouseBakotaBox1}>
                  <div className={css.titleBakotaBox}>
                    <h3 className={css.titleBakota}>{t("titleBakota")}</h3>
                  </div>
                  <span className={css.lineBakota}></span>
                  <div className={css.reserveHouseBakotaBox2}>
                    <p className={css.textBakota}>{t("textBakota")}</p>
                  </div>
                </div>

                <div className={css.starIcon}>
                  <button className={css.btnStar}>
                    <svg
                      className={css.iconStar}
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
                    {t("buttonReserve")}
                  </button>
                </div>
              </div>
            </div>

            <div className={css.reserveHouse}>
              <div className={css.reserveHouseContainer}>
                <div className={css.reserveHouseBakotaBox}>
                  <img
                    className={css.bakotaImg}
                    src={Karpaty}
                    alt="Karpaty Vacation"
                  />
                </div>
                <div className={css.reserveHouseBakotaBox1}>
                  <div className={css.titleBakotaBox}>
                    <h3 className={css.titleBakota}>{t("titleCarpaty")}</h3>
                  </div>
                  <span className={css.lineBakota}></span>
                  <div className={css.reserveHouseBakotaBox2}>
                    <p className={css.textBakota}>{t("textCarpaty")}</p>
                  </div>
                </div>

                <div className={css.starIcon}>
                  <button className={css.btnStar}>
                    <svg
                      className={css.iconStar}
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
                    {t("buttonReserve")}
                  </button>
                </div>
              </div>
            </div>

            <div className={css.reserveHouse}>
              <div className={css.reserveHouseContainer}>
                <div className={css.reserveHouseBakotaBox}>
                  <img
                    className={css.bakotaImg}
                    src={Kyiv}
                    alt="Kyiv Vacation"
                  />
                </div>
                <div className={css.reserveHouseBakotaBox1}>
                  <div className={css.titleBakotaBox}>
                    <h3 className={css.titleBakota}>{t("titleKyiv")}</h3>
                  </div>
                  <span className={css.lineBakota}></span>
                  <div className={css.reserveHouseBakotaBox2}>
                    <p className={css.textBakota}>{t("textKyiv")}</p>
                  </div>
                </div>

                <div className={css.starIcon}>
                  <button className={css.btnStar}>
                    <svg
                      className={css.iconStar}
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
                    {t("buttonReserve")}
                  </button>
                </div>
              </div>
            </div>

            <div className={css.reserveHouse}>
              <div className={css.reserveHouseContainer}>
                <div className={css.reserveHouseBakotaBox}>
                  <img
                    className={css.bakotaImg}
                    src={Odesa}
                    alt="Odesa Vacation"
                  />
                </div>
                <div className={css.reserveHouseBakotaBox1}>
                  <div className={css.titleBakotaBox}>
                    <h3 className={css.titleBakota}>{t("titleOdesa")}</h3>
                  </div>
                  <span className={css.lineBakota}></span>
                  <div className={css.reserveHouseBakotaBox2}>
                    <p className={css.textBakota}>{t("textOdesa")}</p>
                  </div>
                </div>

                <div className={css.starIcon}>
                  <button className={css.btnStar}>
                    <svg
                      className={css.iconStar}
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
                    {t("buttonReserve")}
                  </button>
                </div>
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
