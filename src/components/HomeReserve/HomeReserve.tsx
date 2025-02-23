import { useParams } from "react-router-dom";
import css from "./HomeReserve.module.css";

const HomeReserve: React.FC = () => {
  const { reservationId } = useParams();
  console.log("Отримано reservationId:", reservationId);

  return (
    <>
    <div>Деталі бронювання № {reservationId}
      </div>
    </>
  );
};
export default HomeReserve;
