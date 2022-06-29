import { Button, CircularProgress, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../../../CurrencyContext";
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
  const [days, setDays] = useState(1);

  const prams = useParams();
  const { currency, symbol } = useContext(CurrencyContext);

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
      width="70%"
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
          thickness={1}
        />
      ) : (
        <>
          <Box
            height="100%"
            width="95%"
            // display="flex"
            // flexDirection="column"
            // alignItems="center"
            padding="2rem"
          >
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
          </Box>
        </>
      )}
    </Box>
  );
};

export default RightSide;
