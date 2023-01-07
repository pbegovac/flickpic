import {
  Background,
  Div,
  Input,
  Button,
} from "../tailwind/TailwindStartCreating";

const GenerateImageForm = () => {
  return (
    <Background>
      <form className="flex">
        <Div>
          <Input />
        </Div>
        <div>
          <Button>Generate</Button>
        </div>
      </form>
    </Background>
  );
};

export default GenerateImageForm;
