import css from "./LocationDropdown.module.css";
import { useState } from "react";

const locations = [
  { id: 1, name: "Бакота" },
  { id: 2, name: "Карпати" },
  { id: 3, name: "Київ" },
  { id: 4, name: "Одеська область" },
];

const LocationDropdown = ({ onSelect }) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (location) => {
    setSelected(location.name);
    onSelect(location); 
  };

  return (
    <>
      <button className={css.dropdownButton}>{selected}</button>
      <div className={css.dropdownContent}>
        {locations.map((location) => (
          <button
            className={css.btnDropdown}
            key={location.id}
            onClick={() => handleSelect(location)}
          >
            {location.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default LocationDropdown;
