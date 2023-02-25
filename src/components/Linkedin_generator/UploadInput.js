import { useState } from "react";

const UploadInput = ({ index }) => {
  const [file, setFile] = useState(null);

  return (
    <form className="flex items-center justify-around my-2 h-48 xs:flex-col lg:flex-row">
      <label
        htmlFor={`file-upload-${index}`}
        className="bg-themeYellow h-14 cursor-pointer flex justify-center items-center rounded-xl xs:text-sm w-32"
      >
        Photo #{index}
      </label>
      <input
        id={`file-upload-${index}`}
        type="file"
        onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
        className="hidden"
      />
      <img src={file} className=" xs:w-32 rounded" />
    </form>
  );
};

export default UploadInput;
