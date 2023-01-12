import { useState } from "react";
import Images from "./Images";

import swimming from "../../images/swimming.jpeg";
import violin from "../../images/violin.jpeg";
import Backdrop from "./Backrdop";

const GenerateImage = (props) => {
  const [areImagesShown, setImagesAsShown] = useState(false);
  const [inputTextValue, setInputTextValue] = useState("");
  const [inputGuidanceValue, setGuidanceValue] = useState(10);

  const submitHandler = (e) => {
    e.preventDefault();
    setImagesAsShown(true);

    const data = {
      text: inputTextValue,
    };

    console.log(data);
    props.onSubmit(data);
  };

  return (
    <div className="h-full flex bg-white justify-start pt-10 flex-col items-center">
      <form className="flex" onSubmit={submitHandler}>
        <input
          className="w-thousand h-10 border rounded outline-0 pl-2"
          type="text"
          required
          onChange={(e) => setInputTextValue(e.target.value)}
          //if input value is "" put just return
        />
        <button className="bg-green h-10 rounded w-150 ml-2 text-white hover:opacity-80 hover:bg-blue ">
          Generate Image
        </button>
      </form>
      {areImagesShown && (
        <div className="flex">
          <Images src={swimming} alt="First" />
          <Images src={violin} alt="Second" />
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
