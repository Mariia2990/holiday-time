import { useTranslation } from "react-i18next";
import css from "./LocationDropdown.module.css";
import { useState } from "react";

interface Location {
  id: number;
}

interface LocationDropdownProps {
  onSelect: (location: Location) => void;
}

const locations: Location[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const LocationDropdown: React.FC<LocationDropdownProps> = ({ onSelect }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { t } = useTranslation();

  const handleSelect = (location: Location) => {
    setSelectedId(location.id); 
    onSelect(location);
  };

  return (
    <>
      <button className={css.dropdownButton}>
        {selectedId ? t(`location_${selectedId}`) : t("location_placeholder")}
      </button>

      <div className={css.dropdownContent}>
        {locations.map((location) => (
          <button
            className={css.btnDropdown}
            key={location.id}
            onClick={() => handleSelect(location)}
          >
            {t(`location_${location.id}`)}
          </button>
        ))}
      </div>
    </>
  );
};

export default LocationDropdown;
