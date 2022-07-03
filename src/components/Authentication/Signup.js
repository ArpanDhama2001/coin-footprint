import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

const style = {
  textfield: {},
  btnDiv: {
    height: "2.7rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
};

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState("");

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "350px",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <TextField
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
        sx={style.textfield}
        fullWidth
        label="Email"
      ></TextField>
      <TextField
        type="password"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
        sx={style.textfield}
        fullWidth
        label="Password"
      ></TextField>
      <TextField
        type="password"
        onChange={(e) => {
          setConfirmRegisterPassword(e.target.value);
        }}
        sx={style.textfield}
        fullWidth
        label="Confirm Password"
      ></TextField>
      <div style={style.btnDiv}>
        <Button
          onClick={() => {
            registerPassword === confirmRegisterPassword
              ? registerUser()
              : console.log("Confirm Password do not match!");
          }}
          sx={{
            width: "100%",
            fontWeight: "bold",
            color: "black",
            backgroundColor: "other.main",
            fontSize: "1rem",
            letterSpacing: ".1rem",
            "&:hover": {
              backgroundColor: "other.main",
              opacity: "0.9",
            },
          }}
          variant="contained"
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
};

export default Signup;
