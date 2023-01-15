import { useState } from "react";
import FormInput from "./FormInput";

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Invalid email address!",
      label: "Email",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and should include at least 1 lowercase, 1 uppercase, 1 number and 1 special character",
      label: "Password",
      pattern:
        "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$",
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    } else {
      return;
    }

    if (
      /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/.test(
        values.password
      )
    ) {
    } else {
      return;
    }

    if (values.confirmPassword !== values.password) {
      return;
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <main className="h-full w-screen flex justify-center items-center">
      <form
        className="h-75 w-800 flex items-center justify-between bg-white p-4 text-nightTurquoise rounded-md shadow-2xl"
        onSubmit={submitHandler}
        noValidate
      >
        <div className="h-full w-full flex items-center justify-center ">
          <h1 className="font-extrabold text-xl p-2">
            Go <span className="text-red">flick</span> yourself
          </h1>
        </div>
        <div className="h-full flex flex-col justify-between items-center p-2">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              //take error Message from here and say that if the error message is shown - return function (dont submit it)
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <p className="text-lightgray underline cursor-pointer">
            Already have an account?
          </p>
          <button className="bg-nightTurquoise h-40 rounded w-150 text-white hover:opacity-80 ">
            Sign Up
          </button>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
