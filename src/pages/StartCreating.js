import GenerateImage from "../components/Generator/GenerateImage";

const StartCreating = () => {
  const addFormHandler = (data) => {
    fetch("Lukin url");
  };
  return (
    <div>
      <GenerateImage onSubmit={addFormHandler} />
    </div>
  );
};

export default StartCreating;
