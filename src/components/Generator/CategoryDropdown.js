import { categories } from "../../utils/categories";
import { useState, useEffect, useRef } from "react";

const CategoryDropdown = ({ category, setCategory }) => {
  const [dropdownIsShown, setDropdownIsShown] = useState(false);
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [categoryIsShown, setCategoryIsShown] = useState(true);
  const [inputIsShown, setInputIsShown] = useState(false);

  const toggleElement = useRef(null);

  useEffect(() => {
    let clickOutsideHandler = (e) => {
      if (!toggleElement.current?.contains(e.target)) {
        setDropdownIsShown(false);
        setInputIsShown(false);
      }
    };

    document.addEventListener("click", clickOutsideHandler);
  }, []);

  return (
    <div className="relative" ref={toggleElement}>
      {inputIsShown && (
        <input
          type="text"
          placeholder="Select category..."
          className="w-116 font-Harmattan py-2 outline-none rounded pl-2 absolute"
          value={searchBoxValue}
          onChange={(e) => setSearchBoxValue(e.target.value)}
        />
      )}
      {categoryIsShown && (
        <h1
          className={`bg-${category.color} w-116 text-center text-white font-Harmattan py-2 rounded `}
          onClick={() => {
            setInputIsShown(true);
            setDropdownIsShown(true);
          }}
        >
          {category.value}
        </h1>
      )}

      {dropdownIsShown && (
        <ul className="absolute max-h-52  overflow-y-scroll">
          {categories
            .filter((item) =>
              item.value.toLowerCase().includes(searchBoxValue.toLowerCase())
            )
            .map((item) => {
              return (
                <li
                  key={item.id}
                  className={`bg-${item.color} w-116 text-center text-white font-Harmattan py-2 rounded`}
                  onClick={() => {
                    setCategory(item);
                    setCategoryIsShown(true);
                    setDropdownIsShown(false);
                  }}
                >
                  {item.value}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
