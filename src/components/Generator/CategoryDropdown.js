import { useState } from "react";
import { categories } from "../../utils/categories";

const CategoryDropdown = ({ category, setCategory }) => {
  const [dropdownIsShown, setDropdownIsShown] = useState(false);

  return (
    <div className="absolute right-29">
      <h1
        className={`bg-${category.color} dropdownList`}
        onClick={() => {
          setDropdownIsShown(!dropdownIsShown);
        }}
      >
        {category.value}
      </h1>
      {dropdownIsShown && (
        <ul>
          {categories.map((item) => {
            if (item.id !== category.id) {
              return (
                <li
                  key={item.id}
                  className={`bg-${item.color} dropdownList`}
                  onClick={() => {
                    setCategory(item);
                    setDropdownIsShown(false);
                  }}
                >
                  {item.value}
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
