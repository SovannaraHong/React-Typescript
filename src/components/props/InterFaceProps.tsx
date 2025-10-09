import { useState } from "react";

interface ButtonType {
  text: string;
  ClassName: string;
  FontSize: number;
}

const InterFaceProps = ({ text, ClassName, FontSize }: ButtonType) => {
  const [click, setClick] = useState("Hello");
  return (
    <div>
      <button style={{ fontSize: `${FontSize}` }} className={ClassName}>
        {text}
      </button>
      <button onClick={() => setClick("HI")}>{click}</button>
    </div>
  );
};

export default InterFaceProps;
