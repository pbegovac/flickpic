import { useState } from "react";
import Images from "./Images";
import swimming from "../../images/swimming.jpeg";
import violin from "../../images/violin.jpeg";

const GenerateImage = ({ onSubmit }) => {
  const [areImagesShown, setImagesAreShown] = useState(false);
  const [inputTextValue, setInputTextValue] = useState("");
  const [inputGuidanceValue, setGuidanceValue] = useState(10);
  const [errorIsShown, setErrorIsShown] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setImagesAreShown(true);

    if (inputTextValue === "") {
      setErrorIsShown(true);
      setImagesAreShown(false);
      return;
    } else setErrorIsShown(false);

    const data = {
      valueText: inputTextValue,
    };

    onSubmit(data);
  };

  return (
    <div className="pt-10">
      <div className="flex justify-center items-start mb-20">
        <form className="flex flex-col" onSubmit={submitHandler} noValidate>
          <div>
            <input
              className="w-1000 h-40 rounded-md pl-2 outline-0 font-semibold"
              type="text"
              placeholder="Enter your text"
              onChange={(e) => setInputTextValue(e.target.value)}
            />
            <button className="bg-nightTurquoise h-40 rounded w-150 ml-4 text-white hover:opacity-80 ">
              Generate
            </button>
          </div>
          {errorIsShown && (
            <span className="py-2 text-red text-xs">
              This field is required
            </span>
          )}
        </form>
      </div>
      {areImagesShown && (
        <div className="flex bg-pantone justify-around items-center">
          <Images src={swimming} alt="First" />
          <Images src={violin} alt="Second" />
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
