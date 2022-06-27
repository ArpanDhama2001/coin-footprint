import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";

import { CurrencyProvider } from "./CurrencyContext";
import Homepage from "./routes/Homepage";
import Coin from "./routes/Coin";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000",
      // main: "#48eda8",
      //another one: #28a745
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/coins/:coinid" element={<Coin />} />
          </Routes>
        </BrowserRouter>
      </CurrencyProvider>
    </ThemeProvider>
  );
};

export default App;
