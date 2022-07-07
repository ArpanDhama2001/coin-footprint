/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Top100 } from "../../config/apis";
import { CurrencyContext } from "../../CurrencyContext";
import axios from "axios";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const TableComponent = () => {
  const navigate = useNavigate();

  const { currency, symbol, coins, setCoins } = useContext(CurrencyContext);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  // const [coins, setCoins] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [change, setChange] = useState(1);
  const [page, setPage] = useState(1);

  const requestSearch = (search) => {
    // eslint-disable-next-line array-callback-return
    const filteredRows = list.filter((row) => {
      if (
        row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.symbol.toLowerCase().includes(search.toLowerCase())
      ) {
        return row;
      }
    });
    setCoins(filteredRows);
  };

  const fetchList = async () => {
    setLoading(true);
    const { data } = await axios.get(Top100(currency));
    setList(data);
    setCoins(data);
    console.log("coins: ", coins);
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
  }, [currency]);

  const convertToMillion = (num) => {
    return Math.round(num / 1000000);
  };

  const changeColor = (change) => {
    if (change >= 0) {
      return "rgb(14, 203, 129)";
    } else {
      return "red";
    }
  };

  return (
    <div
      style={{
        marginBottom: "10px",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        label="Search for a coin..."
        onChange={(e) => {
          requestSearch(e.target.value);
        }}
      />

      <TableContainer
        sx={{
          marginTop: "10px",
        }}
      >
        {loading ? (
          <LinearProgress
            color="primary"
            sx={{
              margin: "2rem 0",
            }}
          />
        ) : (
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#48eda8",
                  color: "black",
                  fontWeight: "800",
                }}
              >
                <TableCell
                  sx={{
                    color: "black",
                    fontWeight: "800",
                  }}
                >
                  Coin
                </TableCell>
                <TableCell
                  sx={{
                    color: "black",
                    fontWeight: "800",
                    textAlign: "right",
                  }}
                >
                  {symbol} Price
                </TableCell>
                <TableCell
                  sx={{
                    color: "black",
                    fontWeight: "800",
                    textAlign: "right",
                  }}
                >
                  24h Change
                </TableCell>
                <TableCell
                  sx={{
                    color: "black",
                    fontWeight: "800",
                    textAlign: "right",
                  }}
                >
                  {symbol} Market Cap
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coins.slice((page - 1) * 10, (page - 1) * 10 + 10).map((row) => (
                <TableRow
                  onClick={() => {
                    navigate(`/coins/${row.id}`);
                  }}
                  sx={{
                    cursor: "pointer",
                  }}
                  key={row.id}
                >
                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "left",
                      }}
                    >
                      <img
                        src={row.image}
                        alt={row.name}
                        style={{
                          height: "60px",
                          paddingRight: ".75rem",
                        }}
                      />
                      <div
                        style={{
                          fontFamily: "Montserrat",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "1.3rem",
                          }}
                        >
                          {row.symbol.toUpperCase()}
                        </p>
                        <p>{row.name}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    {symbol} {row.current_price}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: changeColor(change),
                    }}
                  >
                    {row.price_change_percentage_24h}%
                  </TableCell>
                  <TableCell align="right">
                    {symbol} {convertToMillion(row.market_cap)}M
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      <Pagination
        size="small"
        count={coins?.length / 10}
        color="primary"
        onChange={(_, e) => {
          setPage(e);
          window.scrollTo({ top: 450, behavior: "smooth" });
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
        }}
        // sx={{
        //   xs: {
        //     display: "flex",
        //     justifyContent: "center",
        //     padding: "2rem",
        //   },
        //   sm: {
        //     display: "flex",
        //     justifyContent: "center",
        //     padding: "2rem",
        //   },
        // }}
      />
    </div>
  );
};

export default TableComponent;
