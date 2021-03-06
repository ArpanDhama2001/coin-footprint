import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { Avatar, Divider, Typography } from "@mui/material";
import { CurrencyContext } from "../../CurrencyContext";
import WatchListItem from "./WatchListItem";

export default function UserSidebar() {
  const style = {
    sideBar: {
      outer: {
        minHeight: "100%",
        width: "360px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      container: {
        padding: "2rem",
        width: "90%",
        height: "100%",
      },
      main: {
        body: {
          height: "90%",
          fontFamily: "Montserrat",
        },
        profile: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          marginBottom: "10px",
          // height: "40%",
        },
        profilePic: {
          backgroundColor: "other.main",
          height: "150px",
          width: "150px",
        },
        wishList: {
          height: "400px",
          width: "90%",
          marginTop: "20px",
          backgroundColor: "#808080",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          padding: "1rem",
          overflow: "auto",
        },
      },
      LoginBtn: {
        marginTop: "30px",
        color: "black",
        fontSize: "1rem",
        fontWeight: "600",
        width: "100%",
        height: "50px",
        backgroundColor: "other.main",
        border: "none",
        "&:hover": {
          backgroundColor: "other.main",
          opacity: ".8",
        },
      },
    },
  };

  const { user, coins, watchList } = React.useContext(CurrencyContext);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    console.log("toggleDrwaer", event);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logout = async () => {
    await signOut(auth);
    toggleDrawer("right", false);
  };

  const list = (anchor) => (
    <Box sx={style.sideBar.outer} role="presentation">
      <Box sx={style.sideBar.container}>
        <Button
          onClick={toggleDrawer(anchor, false)}
          sx={{
            color: "white",
            position: "absolute",
            left: "300px",
            fontSize: "1.3rem",
            borderRadius: "50% 50%",
            textShadow: "4px 0px 1px crimson",
            "&:hover": {
              opacity: ".9",
              backgroundColor: "transparent",
            },
          }}
        >
          X
        </Button>
        <Box sx={style.sideBar.main.body}>
          <Box sx={style.sideBar.main.profile}>
            <Avatar
              sx={style.sideBar.main.profilePic}
              src={user.photoURL}
              alt={user.displayName || user.email}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                letterSpacing: ".1rem",
              }}
            >
              {user.displayName || user.email}
            </Typography>
          </Box>
          <Box sx={style.sideBar.main.wishList}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "1.3rem",
                textShadow: "3px 2px rgba(0,0,0,.6)",
              }}
            >
              Watch List
            </Typography>
            {coins.map((coin) => {
              if (watchList.includes(coin.id)) {
                return (
                  <>
                    <WatchListItem
                      // key={coin.id}
                      coinid={coin.id}
                      coinSymbol={coin.symbol}
                      currentPrice={coin.current_price}
                    />
                    <Divider
                      sx={{
                        color: "white",
                        // border: "2px solid white",
                        width: "100%",
                      }}
                      variant="middle"
                    />
                  </>
                );
              }
            })}
          </Box>
        </Box>

        <Button sx={style.sideBar.LoginBtn} onClick={logout}>
          Log out
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Avatar
        onClick={toggleDrawer("right", true)}
        sx={{
          backgroundColor: "other.main",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        src={user.photoURL}
        alt={user.displayName || user.email}
      />
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{
          minHeight: "100%",
        }}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
