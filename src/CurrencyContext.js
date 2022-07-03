import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./config/firebaseConfig";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [days, setDays] = useState(1);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, symbol, days, setDays, user, setUser }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
