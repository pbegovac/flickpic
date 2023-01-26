import GenerateImage from "../components/Generator/GenerateImage";
import { useState } from "react";

const StartCreating = () => {
  const [imageSrc, setImageSrc] = useState("");
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

    fetch(
      "https://byo7cq373lffyi556se6cbm6vy0vzpnj.lambda-url.eu-west-1.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({
          prompt: data.valueText,
          style: `<${data.category}>`,
          guidance_scale: data.guidanceValue,
          results: 1,
          num_inference_steps: 10,
        }),
        headers: {},
        mode: "cors",
      }
    )
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setImageSrc(data);
      });
  };
  return (
    <div>
      <GenerateImage onSubmit={addFormHandler} src={imageSrc} />
    </div>
  );
};

export default StartCreating;
