import { Box } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React, { useContext } from "react";
import { CurrencyContext } from "../../CurrencyContext";

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

const WatchListItem = ({ coinSymbol, currentPrice }) => {
  const { symbol } = useContext(CurrencyContext);

  return (
    <Box sx={style.Item}>
      <span style={{ color: "#48eda8" }}>{coinSymbol.toUpperCase()}</span>
      <Box sx={style.ItemRight}>
        <span>{symbol + currentPrice}</span>
        <RemoveCircleOutlineIcon sx={style.RemoveBtn} />
      </Box>
    </Box>
  );
};

export default WatchListItem;
