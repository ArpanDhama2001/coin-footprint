import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { coinData } from "../config/apis";
import { Box, CircularProgress, Divider } from "@mui/material";
import LeftSide from "../components/CoinPage/LeftSide";
import RightSide from "../components/CoinPage/RightSide/RightSide";
import Navbar from "../components/Navbar";
import { CurrencyContext } from "../CurrencyContext";

const Coin = () => {
  const { currency } = useContext(CurrencyContext);

  const params = useParams();
  const [coin, setCoin] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCoin = async (coinid) => {
    setLoading(true);
    const { data } = await axios.get(coinData(coinid));
    setCoin(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoin(params.coinid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  if (!coin) {
    return (
      <Box
        backgroundColor="#14161a"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress color="secondary" size={200} />
      </Box>
    );
  }
  return (
    <Box>
      <Navbar />
      <Box
        backgroundColor="#14161a"
        display={{ xs: "block", lg: "flex" }}
        height={{ xs: "100%", lg: "100vh" }}
      >
        {loading ? (
          <p>loading</p>
        ) : (
          <LeftSide
            id={coin.id}
            names={coin.name}
            image={coin.image.large}
            description={coin.description.en}
            rank={coin.market_data.market_cap_rank}
            currentPrice={
              coin.market_data.current_price[currency.toLowerCase()]
            }
            marketCap={coin.market_data.market_cap[currency.toLowerCase()]}
          />
        )}

        <Divider
          display={{ xs: "none", lg: "auto" }}
          variant="middle"
          orientation="vertical"
          flexItem
        />

        <RightSide />
      </Box>
    </Box>
  );
};

export default Coin;
