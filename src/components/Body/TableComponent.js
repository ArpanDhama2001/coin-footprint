import React, { useContext, useEffect, useState } from "react";
import { Top100 } from "../../config/apis";
import { CurrencyContext } from "../../CurrencyContext";
import axios from "axios";
import {
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

  const fetchList = async () => {
    const { data } = await axios.get(Top100(currency));
    setList(data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  // list.map((row) => {
  //   console.log(row.name);
  // });

  return (
    <div>
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
            {list.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.current_price}</TableCell>
                <TableCell>{row.price_change_percentage_24h}</TableCell>
                <TableCell>{row.market_cap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
