import { useNavigate } from "react-router-dom";
import css from "./ReservationDetailPage.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Calendar from "../../components/Calendar/Calendar.tsx";
import kapratyImage from "../../img/Karpaty1-2x.jpg";
import kapratyImage2 from "../../img/Group2x.jpg";
import kapratyImage3 from "../../img/Karpaty2-2x.jpg";
import kapratyImage4 from "../../img/Karpaty3-2x.jpg";
import { IoPersonSharp } from "react-icons/io5";


const ReservationDetailPage: React.FC = () => {
  // const { reservationId } = useParams();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    arrivalDate: Yup.string().required("Оберіть дату заїзду"),
    departureDate: Yup.string().required("Оберіть дату виїзду"),
    rooms: Yup.number()
      .min(1, "Мінімум 1 номер")
      .required("Оберіть кількість номерів"),
    adults: Yup.number()
      .min(1, "Мінімум 1 дорослий")
      .required("Оберіть кількість дорослих"),
    children: Yup.number()
      .min(0, "Некоректна кількість")
      .required("Оберіть кількість дітей"),
  });

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
              src={kapratyImage2}
              alt="Karpaty vacation"
            ></img>
          </div>
          <div className={css.reservDetail2}>
            <img
              className={css.reservDetailImg1}
              src={kapratyImage}
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
                src={kapratyImage3}
                alt="Karpaty vacation"
              ></img>
            </div>
            <div className={css.reservDetail5}>
              <img
                className={css.reservDetailImg3}
                src={kapratyImage4}
                alt="Karpaty vacation"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <h2 className={css.reservDetailTitle}>Наявність місць</h2>
      <div className={css.seatReservation}>
        <div className={css.textReserv}>
          <p>Коли б Ви хотіли зупинитися в помешканні Полонини Карпат?</p>
        </div>
        <Formik
          initialValues={{
            arrivalDate: "",
            departureDate: "",
            rooms: 1,
            adults: 1,
            children: 0,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log("Submitted values:", values)}
        >
          {({ values, setFieldValue }) => (
            <Form className={css.reservDetailForm}>
              <div className={css.resDetailBox}>
                <div className={css.labelDetailWrapper}>
                  <label className={css.labelDetail}>Дата заїзду</label>
                  <Calendar
                    selectedDate={values.arrivalDate}
                    onChange={(date) => setFieldValue("arrivalDate", date)}
                  />
                </div>
                <div className={css.labelDetailWrapper}>
                  <label className={css.labelDetail}>Дата виїзду</label>
                  <Calendar
                    selectedDate={values.departureDate}
                    onChange={(date) => setFieldValue("departureDate", date)}
                  />
                </div>
                <button
                  type="submit"
                  className={css.btnDetail}
                  onSubmit={(values) => {
                    fetch("https://api.example.com/reservations", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(values),
                    })
                      .then((response) => response.json())
                      .then((data) =>
                        console.log("Бронювання підтверджене:", data)
                      )
                      .catch((error) => console.error("Помилка:", error));
                  }}
                >
                  Перевірити наявність вільних місць
                </button>
              </div>

              <div className={css.detailRoom}>
                <div className={css.counterBox}>
                  <p className={css.detailRoomText}>Номери</p>
                  <Field
                    type="number"
                    name="rooms"
                    className={css.counterInput}
                    min="1"
                    value={values.rooms}
                    onChange={(e) => {
                      const value = Math.max(1, Number(e.target.value));
                      setFieldValue("rooms", value);
                    }}
                    onBlur={(e) => {
                      if (e.target.value === "") setFieldValue("rooms", 1);
                    }}
                  />
                </div>

                <div className={css.counterBox}>
                  <p className={css.detailRoomText}>Дорослі</p>
                  <Field
                    type="number"
                    name="adults"
                    className={css.counterInput}
                    min="1"
                    value={values.adults}
                    onChange={(e) => {
                      const value = Math.max(1, Number(e.target.value));
                      setFieldValue("adults", value);
                    }}
                    onBlur={(e) => {
                      if (e.target.value === "") setFieldValue("adults", 1);
                    }}
                  />
                </div>

                <div className={css.counterBox}>
                  <p className={css.detailRoomText}>Діти</p>
                  <Field
                    type="number"
                    name="children"
                    className={css.counterInput}
                    min="0"
                    value={values.children}
                    onChange={(e) => {
                      const value = Math.max(0, Number(e.target.value));
                      setFieldValue("children", value);
                    }}
                    onBlur={(e) => {
                      if (e.target.value === "") setFieldValue("children", 0);
                    }}
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className={css.detailTable}>
        <div className={css.tableGrid}>
          <div className={`${css.tableRow} ${css.headerRow}`}>
            <div className={css.tableHeader}>Вміщує</div>
            <div className={css.tableHeader}>Тип розміщення</div>
            <div className={css.tableHeader}>Ціна </div>
          </div>

          <div className={css.tableRow}>
            <div className={css.tableCell}>
              <span
                className={css.tableCellSpan}
                role="img"
                aria-label="guests"
              >
                <svg
                  width="55"
                  height="60"
                  viewBox="0 0 55 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_109_5069)">
                    <path
                      d="M28.9167 36C31.2477 36 33.5264 35.4135 35.4645 34.3147C37.4027 33.2159 38.9133 31.6541 39.8053 29.8268C40.6974 27.9996 40.9308 25.9889 40.476 24.0491C40.0212 22.1093 38.8988 20.3275 37.2505 18.9289C35.6022 17.5304 33.5022 16.578 31.216 16.1922C28.9298 15.8063 26.5601 16.0043 24.4065 16.7612C22.253 17.5181 20.4123 18.7998 19.1173 20.4443C17.8223 22.0888 17.131 24.0222 17.131 26C17.131 28.6522 18.3727 31.1957 20.583 33.0711C22.7932 34.9464 25.791 36 28.9167 36ZM46.5953 61C47.3768 61 48.1262 60.7366 48.6788 60.2678C49.2313 59.7989 49.5417 59.163 49.5417 58.5C49.5417 53.8587 47.3688 49.4075 43.5008 46.1256C39.6329 42.8438 34.3868 41 28.9167 41C23.4467 41 18.2006 42.8438 14.3327 46.1256C10.4647 49.4075 8.29175 53.8587 8.29175 58.5C8.29175 59.163 8.60218 59.7989 9.15474 60.2678C9.7073 60.7366 10.4567 61 11.2382 61H46.5953Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_109_5069">
                      <rect width="55" height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="55"
                  height="60"
                  viewBox="0 0 55 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_109_5069)">
                    <path
                      d="M28.9167 36C31.2477 36 33.5264 35.4135 35.4645 34.3147C37.4027 33.2159 38.9133 31.6541 39.8053 29.8268C40.6974 27.9996 40.9308 25.9889 40.476 24.0491C40.0212 22.1093 38.8988 20.3275 37.2505 18.9289C35.6022 17.5304 33.5022 16.578 31.216 16.1922C28.9298 15.8063 26.5601 16.0043 24.4065 16.7612C22.253 17.5181 20.4123 18.7998 19.1173 20.4443C17.8223 22.0888 17.131 24.0222 17.131 26C17.131 28.6522 18.3727 31.1957 20.583 33.0711C22.7932 34.9464 25.791 36 28.9167 36ZM46.5953 61C47.3768 61 48.1262 60.7366 48.6788 60.2678C49.2313 59.7989 49.5417 59.163 49.5417 58.5C49.5417 53.8587 47.3688 49.4075 43.5008 46.1256C39.6329 42.8438 34.3868 41 28.9167 41C23.4467 41 18.2006 42.8438 14.3327 46.1256C10.4647 49.4075 8.29175 53.8587 8.29175 58.5C8.29175 59.163 8.60218 59.7989 9.15474 60.2678C9.7073 60.7366 10.4567 61 11.2382 61H46.5953Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_109_5069">
                      <rect width="55" height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
            </div>
            <div className={css.tableCell}>
              <p>
                Двомісний номер <br />1 широке двоспальне ліжко
                <span className={css.tableCellSpan2}>
                <svg
                  width="103"
                  height="40"
                  viewBox="0 0 103 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9375 0.25C8.92297 0.25 3.96875 2.79063 3.96875 5.875V18.5875C1.73844 19.6225 0.3125 21.1038 0.3125 22.75V39.625H18.5938V35.875H84.4062V39.625H102.688V22.75C102.688 21.1038 101.262 19.6225 99.0312 18.5875V5.875C99.0312 2.79063 94.077 0.25 88.0625 0.25H14.9375ZM14.9375 4H88.0625C90.0917 4 91.7188 4.83437 91.7188 5.875V17.125H84.4062V15.25C84.4062 12.1656 79.452 9.625 73.4375 9.625H58.8125C56.0082 9.625 53.4488 10.1875 51.5 11.0875C49.5005 10.1518 46.8943 9.6306 44.1875 9.625H29.5625C23.548 9.625 18.5938 12.1656 18.5938 15.25V17.125H11.2812V5.875C11.2812 4.83437 12.9083 4 14.9375 4ZM29.5625 13.375H44.1875C46.2167 13.375 47.8438 14.2094 47.8438 15.25V17.125H25.9062V15.25C25.9062 14.2094 27.5333 13.375 29.5625 13.375ZM58.8125 13.375H73.4375C75.4667 13.375 77.0938 14.2094 77.0938 15.25V17.125H55.1562V15.25C55.1562 14.2094 56.7833 13.375 58.8125 13.375ZM11.2812 20.875H91.7188C93.748 20.875 95.375 21.7094 95.375 22.75V35.875H91.7188V32.125H11.2812V35.875H7.625V22.75C7.625 21.7094 9.25203 20.875 11.2812 20.875Z"
                    fill="black"
                  />
                </svg>
              </span>
              </p>
              
            </div>
            <div className={css.tableCell}>
              <button className={css.priceButton}>Показати ціни</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationDetailPage;
