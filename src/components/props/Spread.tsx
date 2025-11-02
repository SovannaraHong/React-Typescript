import type React from "react";

interface ButtonType {
  text: string;
}
type InputField = ButtonType &
  React.ComponentProps<"input"> & {
    type: string;
  };
const Spread = ({ text, type, ...props }: InputField) => {
  return (
    <>
      <input type={type} {...props} />
      <button>{text}</button>
    </>
  );
};

export default Spread;
