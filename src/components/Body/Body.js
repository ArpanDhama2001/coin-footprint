import { colors, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Search from "./Search";
import TableComponent from "./TableComponent";

const Body = () => {
  return (
    <div>
      <Container>
        <Typography
          color="secondary.dark"
          variant="h4"
          align="center"
          sx={{
            fontFamily: "Montserrat",
            // color: colors.grey[100],
            margin: "15px 0",
          }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <Search />
        <TableComponent />
      </Container>
    </div>
  );
};

export default Body;
