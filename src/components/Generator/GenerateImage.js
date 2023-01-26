import { useState } from "react";
import Images from "./Images";
import owl1 from "../../images/owl1.png";
import GuidanceScale from "./GuidanceScale";
import Loader from "./Loader";
import { categories } from "../../utils/categories";

const GenerateImage = ({ onSubmit }) => {
  const [areImagesShown, setImagesAreShown] = useState(false);
  const [errorIsShown, setErrorIsShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputTextValue, setInputTextValue] = useState("");
  const [guidanceValue, setGuidanceValue] = useState(5);
  const [category, setCategory] = useState({
    id: 1,
    value: "NORMAL",
    color: "themeBlue",
  });
  const [categoryIndex, setCategoryIndex] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputTextValue === "") {
      setErrorIsShown(true);
      setImagesAreShown(false);
      return;
    } else {
      setImagesAreShown(false);
      setErrorIsShown(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setImagesAreShown(true);
      }, 2000);
    }

    const data = {
      valueText: inputTextValue,
      guidanceValue: parseInt(guidanceValue),
      category: category.value.toLowerCase(),
    };

    onSubmit(data);
  };

  return (
    <div className="h-full flex flex-col justify-start items-center my-10 ">
      <h2 className=" text-textBlack font-bold  text-center leading-snug pb-10  xs:px-12 xs:text-2xl lg:px-60 lg:text-4xl xl:text-5xl xl:px-80">
        FLICK YOUR THOUGHTS INTO UNIQUE AI IMAGES
      </h2>
      <form
        className="flex xs:flex-col items-start xs:w-full xs:px-4 xl:w-full "
        onSubmit={submitHandler}
        noValidate
      >
        <div className="w-full flex justify-center xs:flex-col xs:items-center xl:flex-row xl:items-start">
          <div className=" xs:flex xs:flex-col xs:justify-center xs:items-center w-50">
            <input
              name="valueText"
              className="py-2 text-inputTextColor font-Harmattan outline-0 border-2 border-inputTextColor xs:w-full lg:w-70  xs:text-sm xs:rounded-2xl xs:pl-3 sm:w-70 sm:items-center md:text-xl lg:text-2xl xl:h-full lg:rounded-3xl lg:pl-5 xl:w-full "
              type="text"
              placeholder="Enter your text here..."
              onChange={(e) => setInputTextValue(e.target.value)}
            />
            {errorIsShown && (
              <p className="w-full my-4 text-errorRed text-xs xs:text-center lg:flex lg:justify-center xl:justify-start">
                This field is required
              </p>
            )}
            <ul className="w-full grid grid-cols-5  mt-4">
              {categories.map((item, index) => {
                return (
                  <li
                    key={item.id}
                    className={`${
                      categoryIndex === index && "underline"
                    } text-center text-inputTextColor font-Harmattan py-2 cursor-pointer  rounded-lg hover:underline`}
                    onClick={() => {
                      setCategory(item);
                      setCategoryIndex(index);
                    }}
                  >
                    {item.value}
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="generateButton bg-themeRed ml-3">GENERATE</button>
        </div>
      </form>
      <GuidanceScale
        guidanceValue={guidanceValue}
        setGuidanceValue={setGuidanceValue}
      />
      {loading && <Loader />}
      {areImagesShown && <Images src={owl1} alt="First" />}
    </div>
  );
};

export default GenerateImage;
