import { useState } from "react";
import Images from "./Images";
import owl1 from "../../images/owl1.png";
import owl2 from "../../images/owl2.png";
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
    color: "themeBlue",
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
      <h2 className=" text-textBlack font-bold  text-center leading-snug pb-10  xs:px-12 xs:text-2xl lg:px-60 lg:text-4xl xl:text-5xl xl:px-80">
        FLICK YOUR THOUGHTS INTO UNIQUE AI IMAGES
      </h2>
      <form
        className="flex xs:flex-col items-start xs:w-full xs:px-4 xl:w-full xl:px-60"
        onSubmit={submitHandler}
        noValidate
      >
        <div className="w-full flex justify-between xs:flex-col xs:items-center xl:flex-row xl:items-start">
          <div className="xs:w-full xs:flex xs:flex-col xs:justify-center xs:items-center ">
            <input
              name="valueText"
              className="py-2 text-inputTextColor font-Harmattan outline-0 border-2 border-textBlack xs:w-full  xs:text-sm xs:rounded-2xl xs:pl-3 sm:w-70 sm:items-center md:text-xl lg:text-2xl lg:w-70 xl:h-full lg:rounded-3xl lg:pl-5 xl:w-full"
              type="text"
              placeholder="Enter your text here..."
              onChange={(e) => setInputTextValue(e.target.value)}
            />
            {errorIsShown && (
              <p className="w-full my-4 text-errorRed text-xs xs:text-center lg:flex lg:justify-center xl:justify-start">
                This field is required
              </p>
            )}
          </div>
          <div className="xs:my-6 xs:flex xs:w-70 xs:justify-around xs:items-center lg:w-50 xl:my-0">
            <CategoryDropdown category={category} setCategory={setCategory} />
            <button className="generateButton bg-themeRed">GENERATE</button>
          </div>
        </div>
      </form>
      <GuidanceScale
        guidanceValue={guidanceValue}
        setGuidanceValue={setGuidanceValue}
      />
      {loading && <Loader />}
      {areImagesShown && (
        <div className="flex items-center h-screen w-full xs:flex-col xs:justify-around lg:flex-row lg:justify-center">
          <Images src={owl1} alt="First" />
          <Images src={owl2} alt="Second" />
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
