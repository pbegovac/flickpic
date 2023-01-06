import classes from "./FirstText.module.css";

const FirstText = (props) => {
  return (
    <div className={classes.firstSection}>
      <p>
        {props.text} is an AI driven tool for generating and editing images.
      </p>
      <div>Picture</div>
    </div>
  );
};

export default FirstText;
