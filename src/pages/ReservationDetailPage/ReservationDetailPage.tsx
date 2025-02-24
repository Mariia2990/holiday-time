import { useParams, useNavigate } from "react-router-dom";
import css from "./ReservationDetailPage.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
        <div className={css.textReserv}>
          <p>Коли б Ви хотіли зупинись в помешканні Полонини Карпат?</p>
        </div>
        <Formik>
          <Form className={css.reservDetailForm}>
            <div className={css.resDetailBox}>
              <div className={css.labelDetailWrapper}>
                <label htmlFor="query" className={css.labelDetail}>
                  Дата заїзду
                </label>
                <div className={css.detailInput}>
                  <Field
                    className={css.fieldDetail}
                    type="text"
                    name="query"
                    placeholder="Дата заїзду"
                  />
                  <svg
                    className={css.iconDetail}
                    width="43"
                    height="45"
                    viewBox="0 0 43 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.47913 35.625V13.125H38.5208V35.625C38.5208 37.6875 36.9083 39.375 34.9375 39.375H8.06246C6.09163 39.375 4.47913 37.6875 4.47913 35.625Z"
                      fill="#CFD8DC"
                    />
                    <path
                      d="M38.5208 9.375V15H4.47913V9.375C4.47913 7.3125 6.09163 5.625 8.06246 5.625H34.9375C36.9083 5.625 38.5208 7.3125 38.5208 9.375Z"
                      fill="#F44336"
                    />
                    <path
                      d="M29.5625 12.1875C31.0468 12.1875 32.25 10.9283 32.25 9.375C32.25 7.8217 31.0468 6.5625 29.5625 6.5625C28.0782 6.5625 26.875 7.8217 26.875 9.375C26.875 10.9283 28.0782 12.1875 29.5625 12.1875Z"
                      fill="#B71C1C"
                    />
                    <path
                      d="M13.4375 12.1875C14.9218 12.1875 16.125 10.9283 16.125 9.375C16.125 7.8217 14.9218 6.5625 13.4375 6.5625C11.9532 6.5625 10.75 7.8217 10.75 9.375C10.75 10.9283 11.9532 12.1875 13.4375 12.1875Z"
                      fill="#B71C1C"
                    />
                    <path
                      d="M29.5625 2.8125C28.5771 2.8125 27.7709 3.65625 27.7709 4.6875V9.375C27.7709 10.4062 28.5771 11.25 29.5625 11.25C30.548 11.25 31.3542 10.4062 31.3542 9.375V4.6875C31.3542 3.65625 30.548 2.8125 29.5625 2.8125Z"
                      fill="#B0BEC5"
                    />
                    <path
                      d="M13.4375 2.8125C12.4521 2.8125 11.6459 3.65625 11.6459 4.6875V9.375C11.6459 10.4062 12.4521 11.25 13.4375 11.25C14.423 11.25 15.2292 10.4062 15.2292 9.375V4.6875C15.2292 3.65625 14.423 2.8125 13.4375 2.8125Z"
                      fill="#B0BEC5"
                    />
                    <path
                      d="M11.6459 18.75H15.2292V22.5H11.6459V18.75Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M17.0209 18.75H20.6042V22.5H17.0209V18.75Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M22.3959 18.75H25.9792V22.5H22.3959V18.75Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M27.7709 18.75H31.3542V22.5H27.7709V18.75Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M11.6459 24.375H15.2292V28.125H11.6459V24.375Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M17.0209 24.375H20.6042V28.125H17.0209V24.375Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M22.3959 24.375H25.9792V28.125H22.3959V24.375Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M27.7709 24.375H31.3542V28.125H27.7709V24.375Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M11.6459 30H15.2292V33.75H11.6459V30Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M17.0209 30H20.6042V33.75H17.0209V30Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M22.3959 30H25.9792V33.75H22.3959V30Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M27.7709 30H31.3542V33.75H27.7709V30Z"
                      fill="#90A4AE"
                    />
                  </svg>
                </div>
              </div>
              <div className={css.labelDetailWrapper}>
                <label htmlFor="query" className={css.labelDetail}>
                  Дата виїзду
                </label>
                <div className={css.detailInput}>
                  <Field
                    className={css.fieldDetail}
                    type="text"
                    name="query"
                    placeholder="Дата виїзду"
                  />
                  <svg
                    className={css.iconDetail}
                    width="43"
                    height="45"
                    viewBox="0 0 43 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.47913 35.625V13.125H38.5208V35.625C38.5208 37.6875 36.9083 39.375 34.9375 39.375H8.06246C6.09163 39.375 4.47913 37.6875 4.47913 35.625Z"
                      fill="#CFD8DC"
                    />
                    <path
                      d="M38.5208 9.375V15H4.47913V9.375C4.47913 7.3125 6.09163 5.625 8.06246 5.625H34.9375C36.9083 5.625 38.5208 7.3125 38.5208 9.375Z"
                      fill="#F44336"
                    />
                    <path
                      d="M29.5625 12.1875C31.0468 12.1875 32.25 10.9283 32.25 9.375C32.25 7.8217 31.0468 6.5625 29.5625 6.5625C28.0782 6.5625 26.875 7.8217 26.875 9.375C26.875 10.9283 28.0782 12.1875 29.5625 12.1875Z"
                      fill="#B71C1C"
                    />
                    <path
                      d="M13.4375 12.1875C14.9218 12.1875 16.125 10.9283 16.125 9.375C16.125 7.8217 14.9218 6.5625 13.4375 6.5625C11.9532 6.5625 10.75 7.8217 10.75 9.375C10.75 10.9283 11.9532 12.1875 13.4375 12.1875Z"
                      fill="#B71C1C"
                    />
                    <path
                      d="M29.5625 2.8125C28.5771 2.8125 27.7709 3.65625 27.7709 4.6875V9.375C27.7709 10.4062 28.5771 11.25 29.5625 11.25C30.548 11.25 31.3542 10.4062 31.3542 9.375V4.6875C31.3542 3.65625 30.548 2.8125 29.5625 2.8125Z"
                      fill="#B0BEC5"
                    />
                    <path
                      d="M13.4375 2.8125C12.4521 2.8125 11.6459 3.65625 11.6459 4.6875V9.375C11.6459 10.4062 12.4521 11.25 13.4375 11.25C14.423 11.25 15.2292 10.4062 15.2292 9.375V4.6875C15.2292 3.65625 14.423 2.8125 13.4375 2.8125Z"
                      fill="#B0BEC5"
                    />
                    <path
                      d="M11.6459 18.75H15.2292V22.5H11.6459V18.75Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M17.0209 18.75H20.6042V22.5H17.0209V18.75Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M22.3959 18.75H25.9792V22.5H22.3959V18.75Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M27.7709 18.75H31.3542V22.5H27.7709V18.75Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M11.6459 24.375H15.2292V28.125H11.6459V24.375Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M17.0209 24.375H20.6042V28.125H17.0209V24.375Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M22.3959 24.375H25.9792V28.125H22.3959V24.375Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M27.7709 24.375H31.3542V28.125H27.7709V24.375Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M11.6459 30H15.2292V33.75H11.6459V30Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M17.0209 30H20.6042V33.75H17.0209V30Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M22.3959 30H25.9792V33.75H22.3959V30Z"
                      fill="#90A4AE"
                    />
                    <path
                      d="M27.7709 30H31.3542V33.75H27.7709V30Z"
                      fill="#90A4AE"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <button className={css.btnDetail}>
              Перевірити наявність вільних місць
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ReservationDetailPage;
