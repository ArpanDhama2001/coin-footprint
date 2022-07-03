import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { Typography } from "@mui/material";
import { CurrencyContext } from "../../CurrencyContext";

export default function UserSidebar() {
  const { user } = React.useContext(CurrencyContext);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
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
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button sx={{ color: "white" }} onClick={logout}>
        Logout
      </Button>

      <Typography variant="h6">{user.email}</Typography>
    </Box>
  );

  return (
    <div>
      <Button sx={{ color: "white" }} onClick={toggleDrawer("right", true)}>
        {"Logout"}
      </Button>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
