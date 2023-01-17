import { useState } from "react";
import Images from "./Images";
import swimming from "../../images/swimming.jpeg";
import violin from "../../images/violin.jpeg";
import GuidanceScale from "./GuidanceScale";
import Loading from "./Loading";

const GenerateImage = ({ onSubmit }) => {
  const [areImagesShown, setImagesAreShown] = useState(false);
  const [inputTextValue, setInputTextValue] = useState("");
  const [errorIsShown, setErrorIsShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputTextValue === "") {
      setErrorIsShown(true);
      setImagesAreShown(false);
      return;
    } else {
      setErrorIsShown(false);
      setLoading(true);
      setTimeout(() => {
        setImagesAreShown(true);
        setLoading(false);
      }, 5000);
    }

    const data = {
      valueText: inputTextValue,
    };

    onSubmit(data);
  };

  return (
    <div className="h-full flex flex-col justify-start items-center pt-10">
      <h2 className="text-textBlack font-bold text-5xl w-50 text-center leading-snug pb-10">
        INPUT YOUR TEXT AND GENERATE YOUR IMAGES BASED ON YOUR PREFERENCES
      </h2>
      <form
        className="flex flex-col items-center w-800"
        onSubmit={submitHandler}
        noValidate
      >
        <div>
          <input
            className="w-600 h-58 text-inputTextColor text-2xl font-Harmattan rounded-3xl pl-5 outline-0 border-2 border-textBlack mr-4"
            type="text"
            placeholder="Enter your text here..."
            onChange={(e) => setInputTextValue(e.target.value)}
          />
          <button className="bg-themeRed h-58 rounded-3xl text-lg w-105 font-Harmattan text-white hover:opacity-80 font-bold">
            GENERATE
          </button>
        </div>
        {errorIsShown && (
          <p className=" w-721 py-4 text-errorRed text-xs">
            This field is required
          </p>
        )}
      </form>
      <GuidanceScale />
      {loading && <Loading />}
      {areImagesShown && (
        <div className="flex w-full justify-around items-center mt-10">
          <Images src={swimming} alt="First" />
          <Images src={violin} alt="Second" />
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
