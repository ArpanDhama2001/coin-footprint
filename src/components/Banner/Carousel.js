import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Trending } from "../../config/apis";
import { CurrencyContext } from "../../CurrencyContext";
import { Link } from "react-router-dom";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const { currency, symbol } = useContext(CurrencyContext);
  const [trending, setTrending] = useState([]);

  const fetchTrending = async (currency) => {
    const { data } = await axios.get(Trending(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrending(currency);
  }, [currency]);

  const items = trending.map((coin) => {
    const color =
      coin.price_change_percentage_24h > 0 ? "rgb(14, 203, 129)" : "red";
    return (
      <Link
        to={`/coins/${coin.id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <div
          style={{
            color: "white",
            fontFamily: "Montserrat",
            fontWeight: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "3rem",
          }}
        >
          <img src={coin.image} alt={coin.name} height="80" />
          <div
            style={{
              marginTop: ".5rem",
              fontSize: ".98rem",
            }}
          >
            <span>{coin.symbol.toUpperCase()} </span>
            <span
              style={{
                color: color,
                paddingLeft: "3px",
              }}
            >
              {coin.price_change_percentage_24h}%
            </span>
          </div>
          <div
            style={{
              marginTop: ".25rem",
              fontSize: "1.5rem",
            }}
          >
            {symbol} {coin.current_price}
          </div>
        </div>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div
      style={{
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        infinite
      />
    </div>
  );
};

export default Carousel;
