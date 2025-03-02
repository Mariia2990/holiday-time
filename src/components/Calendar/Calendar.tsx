import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../img/icon-calendar.png";
import css from "./Calendar.module.css"

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
      className={css.dataPicker}
          />
  );
};

export default Calendar;

