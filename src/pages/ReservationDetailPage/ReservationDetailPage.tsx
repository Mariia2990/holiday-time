import { Link, useParams, useNavigate } from "react-router-dom";
import css from "./ReservationDetailPage.module.css";

const ReservationDetailPage: React.FC = () => {
  const { reservationId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className={css.reservationDetailBox}>
        <h2 className={css.resDetailTitle}>Бронювання будиночка в Карпатах</h2>
      </div>

      <div className={css.resLinkGoBack}>
        <button className={css.goBack} onClick={() => navigate(-1)}>
          <svg
            width="38"
            height="23"
            viewBox="0 0 38 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.939339 10.3453C0.353554 10.9311 0.353554 11.8809 0.939339 12.4667L10.4853 22.0126C11.0711 22.5984 12.0208 22.5984 12.6066 22.0126C13.1924 21.4268 13.1924 20.4771 12.6066 19.8913L4.12132 11.406L12.6066 2.92073C13.1924 2.33494 13.1924 1.38519 12.6066 0.799405C12.0208 0.213618 11.0711 0.213618 10.4853 0.799405L0.939339 10.3453ZM38 9.90601L2 9.90601V12.906L38 12.906V9.90601Z"
              fill="white"
            />
          </svg>
          Назад
        </button>
      </div>

      <div className={css.reservationDetailBox1}>
        <div className={css.reservationDetailBox12}>
          <div className={css.reservDetail1}>
            <img
              className={css.reservDetailImg}
              src="/src/img/Group2x.jpg"
              alt="Karpaty vacation"
            ></img>
          </div>
          <div className={css.reservDetail2}>
            <img
              className={css.reservDetailImg1}
              src="/src/img/Karpaty1-2x.jpg"
              alt="Karpaty vacation"
            ></img>
          </div>
        </div>
        <div className={css.reservationDetailBox2}>
          <div className={css.reservDetail3}>
            <p className={css.reservDetailText}>
              Затишні дерев’яні будиночки, які заховались на окраїні лісу,
              зустрічатимуть Вас чудовим краєвидом на ранкові полонини.
              <br /> <br /> Ви можете обрати кількість кімнат та місце, яке буде
              ідеальним для Вас. Територія, на якій базуються будиночки, підійде
              як і для великих компаній, яким потрібно бути поряд у декількох
              будинках, так і для пар, які хочуть бути на одинці.
            </p>
          </div>
          <div className={css.reservationImg}>
            <div className={css.reservDetail4}>
              <img
                className={css.reservDetailImg2}
                src="/src/img/Karpaty2-2x.jpg"
                alt="Karpaty vacation"
              ></img>
            </div>
            <div className={css.reservDetail5}>
              <img
                className={css.reservDetailImg3}
                src="/src/img/Karpaty3-2x.jpg"
                alt="Karpaty vacation"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <h2 className={css.reservDetailTitle}>Наявність місць</h2>

      <div className={css.seatReservation}>
        <p>Коли б Ви хотіли зупинись в помешканні Полонини Карпат?</p>
      </div>
    </>
  );
};

export default ReservationDetailPage;
