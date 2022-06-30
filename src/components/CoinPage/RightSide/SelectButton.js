import { Button } from "@mui/material";
import React from "react";

const SelectButton = ({ label, onClick, selected }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={
        selected
          ? {
              backgroundColor: "other.main",
              width: "15rem",
              color: "black",
              borderColor: "other.main",
              "&:hover": {
                color: "black",
                backgroundColor: "other.main",
              },
            }
          : {
              width: "15rem",
              color: "white",
              borderColor: "other.main",
              transition: "all 0.1s",
              "&:hover": {
                color: "black",
                backgroundColor: "other.main",
              },
            }
      }
    >
      {label}
    </Button>
  );
};

export default SelectButton;
