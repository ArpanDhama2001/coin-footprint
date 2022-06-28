import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { coinData } from "../config/apis";
import { Box } from "@mui/material";
import LeftSide from "../components/CoinPage/LeftSide";
import RightSide from "../components/CoinPage/RightSide";
import Navbar from "../components/Navbar";
import { CurrencyContext } from "../CurrencyContext";

const Coin = () => {
  const { currency } = useContext(CurrencyContext);

  const params = useParams();
  const [coin, setCoin] = useState("");

  const fetchCoin = async (coinid) => {
    const { data } = await axios.get(coinData(coinid));
    console.log(data.market_data.market_cap.currency);
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin(params.coinid);
  }, []);

  return (
    <Box>
      <Navbar />
      <Box backgroundColor="#14161a" display="flex">
        <LeftSide
          name={coin?.name}
          image={coin?.image.large}
          description={coin?.description.en}
          rank={coin?.market_cap_rank}
          currentPrice={coin?.market_data.current_price[currency.toLowerCase()]}
          marketCap={coin?.market_data.market_cap[currency.toLowerCase()]}
        />
        <RightSide />
      </Box>
    </Box>
  );
};

export default Coin;
