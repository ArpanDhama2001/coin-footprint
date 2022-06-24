import React from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner/Banner.js";
import Body from "./components/Body/Body";
import { CurrencyProvider } from "./CurrencyContext";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1de9b6",
    },
    secondary: {
      main: "#bdbdbd",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CurrencyProvider>
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
      </CurrencyProvider>
    </ThemeProvider>
  );
};

export default App;
