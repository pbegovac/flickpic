import GenerateImage from "../components/Generator/GenerateImage";

const StartCreating = () => {
  const addFormHandler = (data) => {
    console.log(data);
    // fetch(
    //   "https://6e4wytiqq4lw4cggaehg6eahqu0zzytg.lambda-url.eu-west-1.on.aws/",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({ user: "pbegovac", name: "Luka" }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     mode: "no-cors",
    //   }
    // );

    // fetch(
    //   "https://byo7cq373lffyi556se6cbm6vy0vzpnj.lambda-url.eu-west-1.on.aws/",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       prompt: data.valueText,
    //       style: data.category,
    //       guidance_scale: data.guidanceValue,
    //       results: 2,
    //       num_interence_steps: 50,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     mode: "no-cors",
    //   }
    // );
  };
  return (
    <div>
      <GenerateImage onSubmit={addFormHandler} />
    </div>
  );
};

export default StartCreating;
