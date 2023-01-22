import { useState } from "react";

const CategoryDropdown = ({ category, setCategory }) => {
  const [dropdownIsShown, setDropdownIsShown] = useState(false);

  const categories = [
    {
      id: 1,
      value: "NORMAL",
      color: "themeYellow",
    },
    { id: 2, value: "CARTOON", color: "themeBlue" },
    { id: 3, value: "COMIC", color: "themeRed" },
  ];

  const [categoriesCopy, setCategoriesCopy] = useState([...categories]);

  return (
    <div className="absolute right-29">
      <h1
        className={`bg-${category.color} dropdownList`}
        onClick={() => {
          setDropdownIsShown(true);
          setCategoriesCopy(
            categoriesCopy.filter(
              (sameElement) => sameElement.id !== category.id
            )
          );
          if (dropdownIsShown) {
            setDropdownIsShown(false);
          }
        }}
      >
        {category.value}
      </h1>
      {dropdownIsShown && (
        <ul>
          {categoriesCopy.map((category) => {
            return (
              <li
                key={category.id}
                className={`bg-${category.color} dropdownList`}
                onClick={() => {
                  setCategory(category);
                  setCategoriesCopy([...categories]);
                  setDropdownIsShown(false);
                }}
              >
                {category.value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
