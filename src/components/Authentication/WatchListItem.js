import { Box } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React, { useContext } from "react";
import { CurrencyContext } from "../../CurrencyContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const style = {
  Item: {
    fontSize: "1.1rem",
    width: "90%",
    height: "40px",
    // border: "1px solid crimson",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all .2s",
    padding: "10px",
    margin: "-5px 0",
    "&:hover": {
      backgroundColor: "rgba(46,46,45,0.3)",
    },
  },
  ItemRight: {
    display: "flex",
    gap: ".7rem",
    alignItems: "center",
  },
  RemoveBtn: {
    transition: "all .2s",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
};

const WatchListItem = ({ coinid, coinSymbol, currentPrice }) => {
  const { symbol, user, watchList, setWatchList } = useContext(CurrencyContext);

  const removeFromWatchList = async (coinid) => {
    const coinRef = doc(db, "watchList", user.uid);
    if (watchList) {
      setWatchList([...watchList, coinid]);
    } else {
      setWatchList([coinid]);
    }

    try {
      await setDoc(
        coinRef,
        {
          coins: watchList.filter((coin) => coin !== coinid),
        },
        { merge: true }
      );
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <Box sx={style.Item}>
      <span style={{ color: "#48eda8" }}>{coinSymbol.toUpperCase()}</span>
      <Box sx={style.ItemRight}>
        <span>{symbol + currentPrice}</span>
        <RemoveCircleOutlineIcon
          onClick={() => {
            removeFromWatchList(coinid);
            // console.log(watchList);
            // console.log("removed", user.uid);
          }}
          sx={style.RemoveBtn}
        />
      </Box>
    </Box>
  );
};

export default WatchListItem;
