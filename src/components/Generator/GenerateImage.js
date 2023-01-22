import { useState } from "react";
import Images from "./Images";
import swimming from "../../images/swimming.jpeg";
import violin from "../../images/violin.jpeg";
import GuidanceScale from "./GuidanceScale";
import Loader from "./Loader";

import CategoryDropdown from "./CategoryDropdown";

const GenerateImage = ({ onSubmit }) => {
  const [areImagesShown, setImagesAreShown] = useState(false);
  const [errorIsShown, setErrorIsShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputTextValue, setInputTextValue] = useState("");
  const [guidanceValue, setGuidanceValue] = useState("5");
  const [category, setCategory] = useState({
    id: 1,
    value: "NORMAL",
    color: "themeRed",
  });

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
      guidanceValue: guidanceValue,
      category: category.value,
    };

    onSubmit(data);
  };

  return (
    <div className="h-full flex flex-col justify-start items-center pt-10 ">
      <h2 className="text-textBlack font-bold text-5xl text-center leading-snug pb-10 px-80">
        FLICK YOUR THOUGHTS INTO UNIQUE AI IMAGES
      </h2>
      <form
        className="flex flex-col items-start w-60"
        onSubmit={submitHandler}
        noValidate
      >
        <div className="w-full flex justify-between items-start">
          <input
            name="valueText"
            className="w-70 py-2 h-full text-inputTextColor text-2xl font-Harmattan rounded-3xl pl-5 outline-0 border-2 border-textBlack"
            type="text"
            placeholder="Enter your text here..."
            onChange={(e) => setInputTextValue(e.target.value)}
          />
          <CategoryDropdown category={category} setCategory={setCategory} />
          <button className="bg-themeRed py-4 px-6 rounded-3xl text-lg font-Harmattan text-white hover:opacity-80 font-bold">
            GENERATE
          </button>
        </div>
        {errorIsShown && (
          <p className="w-full my-4 text-errorRed text-xs">
            This field is required
          </p>
        )}
      </form>
      <GuidanceScale
        guidanceValue={guidanceValue}
        setGuidanceValue={setGuidanceValue}
      />
      {loading && <Loader />}
      {areImagesShown && (
        <div className="flex items-center min-h-screen w-full">
          <Images src={swimming} alt="First" />
          <Images src={violin} alt="Second" />
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
