import { useContext } from "react";
import { FunCount } from "./MainProp";

interface ButtonType {
  text: string;
}

const Button = ({ text }: ButtonType) => {
  const { Counting } = useContext(FunCount);
  return (
    <>
      <button
        onClick={Counting}
        className=" bg-pink-300 text-white px-[10px] py-[5px] rounded-[4px]"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
