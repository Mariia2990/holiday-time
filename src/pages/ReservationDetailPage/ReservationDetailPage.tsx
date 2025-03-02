import { useNavigate } from "react-router-dom";
import css from "./ReservationDetailPage.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Calendar from "../../components/Calendar/Calendar";
import kapratyImage from "../../img/Karpaty1-2x.jpg";
import kapratyImage2 from "../../img/Group2x.jpg";
import kapratyImage3 from "../../img/Karpaty2-2x.jpg";
import kapratyImage4 from "../../img/Karpaty3-2x.jpg";

interface ReservationFormValues {
  arrivalDate: string;
  departureDate: string;
  rooms: number;
  adults: number;
  children: number;
}

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

const ReservationDetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={css.reservationDetailBox}>
        <h2 className={css.resDetailTitle}>Бронювання будиночка в Карпатах</h2>
      </div>

      <div className={css.resLinkGoBack}>
        <button className={css.goBack} onClick={() => navigate(-1)}>
          <svg
            className={css.goBackIcon}
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

      <h2 className={css.reservDetailTitle}>Наявність місць</h2>
      <div className={css.seatReservation}>
        <Formik<ReservationFormValues>
          initialValues={{
            arrivalDate: "",
            departureDate: "",
            rooms: 1,
            adults: 1,
            children: 0,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Submitted values:", values);
          }}
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
                <button type="submit" className={css.btnDetail}>
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
    </>
  );
};

export default ReservationDetailPage;
