import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import Image from "./banner.jpg";
import { Container } from "@mui/system";

const Banner = () => {
  return (
    <Box
      height="400px"
      width="100vw"
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        sx={{
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            color="#fff"
            gutterBottom
            sx={{
              fontWeight: "800",
            }}
          >
            Coin Footprint
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Get All The Info Regarding Your Favorite Crypto Currency
          </Typography>
        </Box>
        <Carousel />
      </Container>
    </Box>
  );
};

export default Banner;
