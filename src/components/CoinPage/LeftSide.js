import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CurrencyContext } from "../../CurrencyContext";
import { db } from "../../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const LeftSide = (props) => {
  const { symbol, watchList, setWatchList, user } = useContext(CurrencyContext);
  const { name, image, description, rank, currentPrice, marketCap } = props;

  const inWatchList = watchList.includes(props.id);

  const addToWatchList = async () => {
    const coinRef = doc(db, "watchList", user.uid);
    if (watchList) {
      setWatchList([...watchList, props.id]);
    } else {
      setWatchList([props.id]);
    }

    try {
      await setDoc(
        coinRef,
        {
          coins: watchList ? [...watchList, props.id] : [props.id],
        },
        { merge: true }
      );
    } catch (error) {
      window.alert(error);
    }
  };

  const removeFromWatchList = async () => {
    const coinRef = doc(db, "watchList", user.uid);
    if (watchList) {
      setWatchList([...watchList, props.id]);
    } else {
      setWatchList([props.id]);
    }

    try {
      await setDoc(
        coinRef,
        {
          coins: watchList.filter((coin) => coin !== props.id),
        },
        { merge: true }
      );
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <Box borderRight="2px solid grey" width="25%" height="100vh" padding="2rem">
      <Box display="flex" flexDirection="column" alignItems="center">
        <img
          src={image}
          alt={name}
          style={{
            height: "200px",
          }}
        />
        <Typography
          margin="1rem 0"
          fontWeight="bold"
          fontSize="3rem"
          fontFamily="Montserrat"
          variant="h5"
          color="primary.light"
        >
          {name}
        </Typography>
        <Typography
          fontSize="1.1rem"
          fontFamily="Montserrat"
          variant="h5"
          color="primary.light"
          align="justify"
          paragraph
          lineHeight="1.7rem"
        >
          {description.split(".")[0]}
        </Typography>
      </Box>
      <Box display="block">
        <Typography
          fontFamily="Montserrat"
          marginTop="1rem"
          variant="h5"
          color="primary.light"
        >
          <Typography fontWeight="bold" variant="p">
            Rank:{" "}
          </Typography>{" "}
          {rank}
        </Typography>
        <Typography
          fontFamily="Montserrat"
          marginTop="1rem"
          variant="h5"
          color="primary.light"
        >
          <Typography fontWeight="bold" variant="p">
            Current Price:{" "}
          </Typography>{" "}
          {symbol + " " + currentPrice}
        </Typography>
        <Typography
          fontFamily="Montserrat"
          marginTop="1rem"
          variant="h5"
          color="primary.light"
        >
          <Typography fontWeight="bold" variant="p">
            Market Cap:{" "}
          </Typography>{" "}
          {symbol + " " + marketCap}
        </Typography>
        {user && (
          <Button
            onClick={() => {
              if (inWatchList) {
                removeFromWatchList();
              } else {
                addToWatchList();
              }
            }}
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: inWatchList ? "#808080" : "other.main",
              marginTop: "2rem",
              color: inWatchList ? "white" : "black",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: inWatchList ? "crimson" : "other.main",
              },
            }}
          >
            {inWatchList ? "Remove from WatchList" : "Add to WatchList"}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default LeftSide;
