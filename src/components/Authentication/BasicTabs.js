import * as React from "react";
import Box from "@mui/material/Box";
import Login from "./Login";
import Signup from "./Signup";
import { AppBar, Button } from "@mui/material";
import GoogleButton from "react-google-button";
import { signInWithGoogle } from "../../config/firebaseConfig";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          paddingBottom: "20px",
        }}
      >
        <span
          style={{
            color: "white",
            fontFamily: "Montserrat",
            fontSize: "1.3rem",
          }}
        >
          OR
        </span>
        <GoogleButton
          onClick={signInWithGoogle}
          style={{ width: "90%" }}
        ></GoogleButton>
      </Box>
    </Box>
  );
}
