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
    <div className="relative py-3  " ref={toggleElement}>
      {inputIsShown && (
        <input
          type="text"
          placeholder="Select category..."
          className="w-180 font-Harmattan py-2 outline-none rounded-xl pl-2 absolute"
          value={searchBoxValue}
          onChange={(e) => setSearchBoxValue(e.target.value)}
        />
      )}
      {categoryIsShown && (
        <h1
          className={`bg-${category.color} text-center text-white font-Harmattan py-2 rounded-xl cursor-pointer `}
          onClick={() => {
            setInputIsShown(true);
            setDropdownIsShown(true);
          }}
        >
          {category.value}
        </h1>
      )}

      {dropdownIsShown && (
        <ul className="absolute max-h-32 overflow-y-scroll">
          {categories
            .filter((item) =>
              item.value.toLowerCase().includes(searchBoxValue.toLowerCase())
            )
            .map((item) => {
              return (
                <li
                  key={item.id}
                  className={`bg-${item.color} w-180 text-center text-white font-Harmattan py-2 hover:scale-105 cursor-pointer hover:opacity-80 rounded-xl`}
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
