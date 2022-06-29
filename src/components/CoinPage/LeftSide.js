import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CurrencyContext } from "../../CurrencyContext";

const LeftSide = (props) => {
  const { symbol } = useContext(CurrencyContext);
  const { name, image, description, rank, currentPrice, marketCap } = props;
  return (
    <Box borderRight="2px solid grey" width="25%" height="100vh" padding="2rem">
      <Box display="flex" flexDirection="column" alignItems="center">
        <img
          src={image}
          alt={name}
          style={{
            height: "200px",
          }}
        />
        <Typography
          margin="1rem 0"
          fontWeight="bold"
          fontSize="3rem"
          fontFamily="Montserrat"
          variant="h5"
          color="primary.light"
        >
          {name}
        </Typography>
        <Typography
          fontSize="1.1rem"
          fontFamily="Montserrat"
          variant="h5"
          color="primary.light"
          align="justify"
          paragraph
          lineHeight="1.7rem"
        >
          {description.split(".")[0]}
        </Typography>
      </Box>
      <Box display="block">
        <Typography
          fontFamily="Montserrat"
          marginTop="1rem"
          variant="h5"
          color="primary.light"
        >
          <Typography fontWeight="bold" variant="p">
            Rank:{" "}
          </Typography>{" "}
          {rank}
        </Typography>
        <Typography
          fontFamily="Montserrat"
          marginTop="1rem"
          variant="h5"
          color="primary.light"
        >
          <Typography fontWeight="bold" variant="p">
            Current Price:{" "}
          </Typography>{" "}
          {symbol + " " + currentPrice}
        </Typography>
        <Typography
          fontFamily="Montserrat"
          marginTop="1rem"
          variant="h5"
          color="primary.light"
        >
          <Typography fontWeight="bold" variant="p">
            Market Cap:{" "}
          </Typography>{" "}
          {symbol + " " + marketCap}
        </Typography>
      </Box>
    </Box>
  );
};

export default LeftSide;
