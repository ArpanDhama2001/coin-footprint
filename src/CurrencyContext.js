import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "./config/firebaseConfig";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [days, setDays] = useState(1);
  const [user, setUser] = useState({});
  // const [coins, setCoins] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    if (user) {
      const coinRef = doc(db, "watchList", user.uid);
      const unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          setWatchList(coin.data().coins);
        } else {
          console.log("No Items in WatchList");
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        symbol,
        days,
        setDays,
        user,
        setUser,
        watchList,
        setWatchList,
        // coins,
        // setCoins,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
