import { useState, useEffect, createContext } from "react";

export const HeaderContext = createContext();

export function HeaderProvider({ children }) {
  const [bagAmount, setBagAmount] = useState(0);
  const [changeBagAmount, setChangeBagAmount] = useState(false);

  useEffect(() => {
    const amount = JSON.parse(localStorage.getItem("cart"))?.length;
    setBagAmount(amount ? amount : 0);
    setChangeBagAmount(false);
  }, [changeBagAmount]);

  return (
    <HeaderContext.Provider
      value={{ bagAmount, setBagAmount, changeBagAmount, setChangeBagAmount }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
