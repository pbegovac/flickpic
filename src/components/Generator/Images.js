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
    <div className="flex justify-around items-center w-500 h-400 cursor-pointer ">
      <img className="w-full h-full" src={src} alt={alt} onClick={scaleUp} />
      {areImagesScaledUp && (
        <div
          onClick={scaleDown}
          className="fixed flex justify-center items-center z-10 bg-backdrop min-w-full h-full top-0 left-0"
        >
          <img className="w-700 h-700" src={src} alt={alt} />
        </div>
      )}
    </div>
  );
};

export default Images;
