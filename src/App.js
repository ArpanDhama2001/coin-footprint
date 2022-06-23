import React from "react";
import { ThemeProvider, createTheme, colors, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner/Banner.js";
import Body from "./components/Body/Body";
import { CurrencyProvider } from "./CurrencyContext";

const theme = createTheme({
  palette: {
    mode: "light",
    // primary: {
    //   main: colors.teal["A400"],
    // },
    // secondary: {
    //   main: colors.grey[500],
    //   error: colors.orange[500],
    // },
    // typography: {
    //   fontFamily: "Montserrat, sans-serif",
    // },
    // background: {
    //   paper: "balck",
    //   default: "black",
    // },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CurrencyProvider>
        <Box>
          <Navbar />
          <Banner />
          <Body />
        </Box>
      </CurrencyProvider>
    </ThemeProvider>
  );
};

export default App;
