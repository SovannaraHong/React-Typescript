import Button from "./Button";
import InterFaceProps from "./InterFaceProps";

function MainProp() {
  return (
    <>
      <Button variant="pink-color" text="Typescript with react js" />
      <InterFaceProps
        text="click me"
        ClassName=" bg-blue-400 text-white "
        FontSize={12}
      />
    </>
  );
}

export default MainProp;
