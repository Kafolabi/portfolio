import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";

const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  const lightIcon = <FontAwesomeIcon icon={faSun} className="me-4" />;

  return (
    <div>
      <label className="position-relative d-inline-block">
        <input
          className="opacity-0"
          type="checkbox"
          defaultChecked={isToggled}
          onClick={callback}
        />
        <span className="position-absolute toggle-span" type="button" />
        <strong>{label}</strong>
      </label>
    </div>
  );
};

export default Toggle;
