import { createContext, useState } from "react";
import Button from "./Button";
interface ButtonType {
  Counting: () => void;
}
export const FunCount = createContext<ButtonType>({
  Counting: () => {},
});
const MainProp = () => {
  const [count, setCount] = useState<number>(0);
  function Counting(): void {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <FunCount.Provider value={{ Counting }}>
        <div className="flex justify-center items-center h-screen">
          <div className="flex justify-center items-center flex-col gap-3">
            <h1 className="bg-green-300 text-white font-monospace font-semibold rounded-[5px]  px-[20px] py-[5px]">
              Count: {count}
            </h1>
            <Button text="click me😍" />
          </div>
        </div>
      </FunCount.Provider>
    </>
  );
};

export default MainProp;
