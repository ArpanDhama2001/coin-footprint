import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import TableComponent from "./TableComponent";

const Body = () => {
  return (
    <div
      sx={{
        backgroundColor: "#14161a",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "white",
            fontFamily: "Montserrat",
            margin: "15px 0",
          }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TableComponent />
      </Container>
    </div>
  );
};

export default Body;
