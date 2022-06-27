import React from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const params = useParams();
  return <div>Coin is {params.coinid}</div>;
};

export default Coin;
