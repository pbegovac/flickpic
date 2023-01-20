import { useState } from "react";
import DropdownButton from "./DropdownButtons";

const Dropdown = ({ addType }) => {
  const [dropdownIsShown, setDropdownIsShown] = useState(false);

  const dropdownHandler = () => {
    setDropdownIsShown(true);

    if (dropdownIsShown) {
      setDropdownIsShown(false);
    }
  };

  return (
    <div>
      <DropdownButton
        className="bg-themeBlue dropdownbuttons"
        onClick={dropdownHandler}
        children={"NORMAL"}
      />
      {dropdownIsShown && (
        <div className="absolute flex flex-col">
          <DropdownButton
            className="bg-themeRed dropdownbuttons"
            children={"CARTOON"}
            onClick={addType}
          />
          <DropdownButton
            className="bg-themeYellow dropdownbuttons"
            children={"COMIC"}
            onClick={addType}
          />
          <DropdownButton
            className="bg-themeBlue dropdownbuttons"
            children={"LINKEDIN"}
            onClick={addType}
          />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
