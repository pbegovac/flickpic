import { useState } from "react";

const UploadInput = ({ index }) => {
  const [file, setFile] = useState(null);

  return (
    <form className="flex items-center justify-around my-2 h-48">
      <label
        htmlFor={`file-upload-${index}`}
        className="bg-themeYellow w-36 h-14 cursor-pointer flex justify-center items-center rounded-xl"
      >
        Photo #{index}
      </label>
      <input
        id={`file-upload-${index}`}
        type="file"
        onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
        className="hidden"
      />
      <img src={file} className="w-20 rounded" />
    </form>
  );
};

export default UploadInput;
