import * as React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import BasicTabs from "./BasicTabs";

const style = {
  color: "black",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#424242",
  border: "0px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
};

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="secondary"
        sx={{
          minWidth: "100px",
          height: "40px",
          color: "black",
          fontSize: "0.95rem",
          fontWeight: "600",
        }}
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BasicTabs handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
