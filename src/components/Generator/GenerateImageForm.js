import { useRef } from "react";

import {
  Background,
  Boxes,
  Div,
  Button,
} from "../tailwind/TailwindStartCreating";

const GenerateImageForm = () => {
  const textInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredText = textInputRef.current.value;
    const Data = {
      text: enteredText,
    };
    console.log(Data, enteredText);
    <Background />;
  };

  return (
    <Background>
      <Boxes>
        <div className="box">LinkedIn</div>
        <div className="box">Enhance quality</div>
        <div className="box">Other possibilities</div>
      </Boxes>
      <form className="flex" onSubmit={submitHandler}>
        <Div>
          <input
            className="bg-pantone h-full rounded min-w-full outline-0 pl-2"
            ref={textInputRef}
            type="text"
            required
            id="textInput"
          />
        </Div>
        <div>
          <Button>Generate</Button>
        </div>
      </form>
    </Background>
  );
};

export default GenerateImageForm;
