import { Button, CircularProgress, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../../../CurrencyContext";
import { btnData } from "./selectionBtnData";
import { pastData } from "../../../config/apis";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/system";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SelectButton from "./SelectButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RightSide = () => {
  const [pastPrices, setPastPrices] = useState([]);
  const [selected, setSelected] = useState(false);

  const prams = useParams();
  const { currency, symbol, days, setDays } = useContext(CurrencyContext);

  const fetchPastPrices = async (coinid) => {
    const { data } = await axios.get(pastData(coinid, currency, days));
    setPastPrices(data.prices);
  };

  useEffect(() => {
    fetchPastPrices(prams.coinid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, days]);

  return (
    <Box
      width={{ xs: "100vw", lg: "70%" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {pastPrices == 0 ? (
        <CircularProgress
          sx={{
            color: "#48eda8",
          }}
          size={250}
          thickness={2}
        />
      ) : (
        <>
          <Box height="100%" width="95%" padding="2rem">
            <Line
              options={{
                elements: {
                  point: {
                    radius: "0",
                  },
                },
              }}
              data={{
                labels: pastPrices.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;

                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: pastPrices.map((coin) => coin[1]),
                    label: `price in ${symbol} ${currency.toUpperCase()}`,
                    borderColor: "#48eda8",
                  },
                ],
              }}
            />

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2 }}
              justifyContent="center"
              marginTop="25px"
              sx={{
                // display: "grid",
                justifyContent: "end",
              }}
            >
              {btnData.map((btn) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    display="flex"
                    justifyContent="center"
                  >
                    <SelectButton
                      label={btn.label}
                      onClick={() => {
                        setDays(btn.value);
                      }}
                      selected={days === btn.value}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
};

export default RightSide;
