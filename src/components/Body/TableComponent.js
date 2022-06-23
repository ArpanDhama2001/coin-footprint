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
} from "@mui/material";

const TableComponent = () => {
  const { currency, symbol } = useContext(CurrencyContext);
  const [list, setList] = useState([]);
  const [coins, setCoins] = useState([]);

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
    const { data } = await axios.get(Top100(currency));
    setList(data);
    setCoins(data);
  };

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <TextField
        fullWidth
        variant="outlined"
        label="Search for a coin..."
        onChange={(e) => {
          requestSearch(e.target.value);
        }}
      />

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell>{symbol} Price</TableCell>
              <TableCell>24h Change</TableCell>
              <TableCell>{symbol} Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                <TableCell>
                  {symbol} {row.current_price}
                </TableCell>
                <TableCell>{row.price_change_percentage_24h}%</TableCell>
                <TableCell>
                  {symbol} {row.market_cap}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
