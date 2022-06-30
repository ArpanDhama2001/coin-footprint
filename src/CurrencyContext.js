import React, { createContext, useEffect, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [days, setDays] = useState(1);

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, symbol, days, setDays }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
