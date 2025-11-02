import { useContext } from "react";
import { navUser } from "./State";

const MainState = () => {
  const { login, logout, user } = useContext(navUser);
  return (
    <>
      <nav className="flex justify-center items-center gap-4 bg-gray-300 shadow-sm py-[20px]">
        <div>LOGO-NINJA</div>
        <ul className="flex justify-center items-center gap-2">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
        <div className="flex justify-center items-center">
          <h1>Hello:{user?.name || "Guest"}</h1>
          <button
            onClick={user ? logout : login}
            className="bg-red-400 cursor-pointer text-white font-semibold font-monospace px-[10px] py-[5px] rounded-[5px]"
          >
            {user ? "logout" : "login"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default MainState;
