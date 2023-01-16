import GenerateImage from "../components/Generator/GenerateImage";

const StartCreating = () => {
  const addFormHandler = (data) => {
    fetch("Lukin url");
  };
  return (
    <div className="h-85">
      <GenerateImage onSubmit={addFormHandler} />
    </div>
  );
};

export default StartCreating;
