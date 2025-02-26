import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../img/icon-calendar.png";

interface CalendarProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onChange }) => {
  return (
    <DatePicker
  selected={selectedDate}
  onChange={onChange}
  dateFormat="dd/MM/yyyy"
  minDate={new Date()}
  placeholderText="Оберіть дату"
      customInput={
        <input
          style={{
            padding: "18px 18px 28px 75px",
            border: "2px solid #90a4ae",
            width: "350px",
            height: "62px",
            color: "#000",
            fontSize: "20px",
            fontWeight: "400",
            backgroundImage: `url(${calendarIcon})`,
            backgroundPosition: "15px center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "43px 45px",
            cursor: "pointer",
          }}
        />
      }
    />
  );
};

export default Calendar;
