import { useState } from "react";
import Images from "./Images";
import swimming from "../../images/swimming.jpeg";
import violin from "../../images/violin.jpeg";

const GenerateImage = ({ onSubmit }) => {
  const [areImagesShown, setImagesAsShown] = useState(false);
  const [inputTextValue, setInputTextValue] = useState("");
  const [inputGuidanceValue, setGuidanceValue] = useState(10);

  const submitHandler = (e) => {
    e.preventDefault();
    setImagesAsShown(true);

    const data = {
      text: inputTextValue,
    };

    onSubmit(data);
  };

  return (
    <div className="h-full bg-pantone pt-10 ">
      <div className="flex justify-center items-start mb-20">
        <form onSubmit={submitHandler}>
          <input
            className="w-1000 h-40 border rounded outline-0 pl-2"
            type="text"
            required
            onChange={(e) => setInputTextValue(e.target.value)}
            //if input value is "" put just return
          />
          <button className="bg-nightTurquoise h-40 rounded w-150 ml-2 text-lightwhite hover:opacity-80 hover:bg-maastrichtBlue ">
            Generate Image
          </button>
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
