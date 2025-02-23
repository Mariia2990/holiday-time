import { Link, useParams } from "react-router-dom";
import css from "./ReservationDetailPage.module.css";

const ReservationDetailPage: React.FC = () => {
  const { reservationId } = useParams();
    console.log("Отримано reservationId:", reservationId);
    const backLink = location.state?.from || "/";

  return (
    <>
      <Link to={backLink} className={css.goBack}>
        Go back
      </Link>
      <div>Деталі бронювання № {reservationId}</div>
    </>
  );
};
export default ReservationDetailPage;
