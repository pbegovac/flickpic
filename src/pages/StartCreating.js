import GenerateImage from "../components/Generator/GenerateImage";

const StartCreating = () => {
  const addFormHandler = (data) => {
    console.log(data);
    // fetch("http://localhost:8080/posts", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   mode: "no-cors",
    // });
  };
  return (
    <div>
      <GenerateImage onSubmit={addFormHandler} />
    </div>
  );
};

export default StartCreating;
