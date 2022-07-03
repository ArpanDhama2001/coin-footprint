import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Login from "./Login";
import Signup from "./Signup";
import { AppBar, Button } from "@mui/material";

const styles = {
  Btn: {
    color: "white",
    flex: "1",
    width: "50%",
    height: "50px",
    fontSize: "1rem",
    borderBottom: "2px solid transparent",
    borderRadius: "0px 0px 10px 10px",
    "&:focus": { borderBottom: "2px solid #48eda8" },
    "&:hover": { borderBottom: "2px solid #48eda8" },
  },
};

export default function BasicTabs({ handleClose }) {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        // backgroundColor: "#14161a",
        borderRadius: "10px",
        outline: "none",
        border: "0px",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#424242",
          color: "white",
          // boxShadow: "5px 5px 2px 2px black",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            onClick={() => {
              setValue(0);
            }}
            sx={styles.Btn}
            variant="text"
          >
            LOGIN
          </Button>
          <Button
            onClick={() => {
              setValue(1);
            }}
            sx={styles.Btn}
            variant="text"
          >
            SIGN UP
          </Button>
        </div>
      </AppBar>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        {value === 0 ? (
          <Login handleClose={handleClose} />
        ) : (
          <Signup handleClose={handleClose} />
        )}
      </div>
    </Box>
  );
}
