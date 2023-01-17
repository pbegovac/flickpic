import { useState } from "react";

const Images = ({ src, alt }) => {
  const [areImagesScaledUp, setImagesScaledUp] = useState(false);

  const scaleUp = () => {
    setImagesScaledUp(true);
  };

  const scaleDown = () => {
    setImagesScaledUp(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-fortyVW h-75 cursor-pointer mb-5">
      <div className="w-full h-full">
        <img
          className="w-full h-full rounded-3xl bg-center"
          src={src}
          alt={alt}
          onClick={scaleUp}
        />
      </div>
      <div className="w-fortyVW flex justify-end py-6">
        <button className="h-33 w-58 text-sm bg-buttonBG font-Harmattan text-white font-bold rounded-3xl hover:opacity-80 ">
          CLAIM
        </button>
      </div>
      {areImagesScaledUp && (
        <div
          onClick={scaleDown}
          className="fixed flex justify-center items-center z-10 bg-backdrop min-w-full h-full top-0 left-0"
        >
          <img className="w-700 h-700  rounded-3xl" src={src} alt={alt} />
        </div>
      )}
    </div>
  );
};

export default Images;
