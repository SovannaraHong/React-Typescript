import { createContext, useState } from "react";

interface NavUserType {
  user: { name: string } | null;
  login: () => void;
  logout: () => void;
}

export const navUser = createContext<NavUserType>({
  user: null,
  login: () => {},
  logout: () => {},
});

const State = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ name: string } | null>(null);

  function login() {
    setUser({ name: "hong" });
  }

  function logout() {
    setUser(null);
  }

  return (
    <navUser.Provider value={{ login, logout, user }}>
      {children}
    </navUser.Provider>
  );
};

export default State;
