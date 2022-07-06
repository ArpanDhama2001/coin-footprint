import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar.js";
import Banner from ".././components/Banner/Banner.js";
import Body from ".././components/Body/Body";

const Homepage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#14161a",
      }}
    >
      <Navbar />
      <Banner />
      <Body />
    </Box>
  );
};

export default Homepage;
