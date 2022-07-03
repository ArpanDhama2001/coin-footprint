import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "250px",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <TextField
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
        fullWidth
        label="Email"
      ></TextField>
      <TextField
        type="password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
        fullWidth
        label="Password"
      ></TextField>
      <Button
        onClick={loginUser}
        sx={{
          width: "100%",
          color: "black",
          fontWeight: "bold",
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
        Login
      </Button>
    </div>
  );
};

export default Login;
