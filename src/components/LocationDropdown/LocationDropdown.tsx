import css from "./LocationDropdown.module.css";
import { useState } from "react";

interface Location {
  id: number;
  name: string;
}

interface LocationDropdownProps {
  onSelect: (location: Location) => void;
}

const locations: Location[] = [
  { id: 1, name: "Бакота" },
  { id: 2, name: "Карпати" },
  { id: 3, name: "Київ" },
  { id: 4, name: "Одеська область" },
];

const LocationDropdown: React.FC<LocationDropdownProps> = ({ onSelect }) => {
  const [selected, setSelected] = useState<string>(""); 

  const handleSelect = (location: Location) => {
    setSelected(location.name);
    onSelect(location);
  };

  return (
    <>
      <button className={css.dropdownButton}>
        {selected || ""}
      </button>
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
