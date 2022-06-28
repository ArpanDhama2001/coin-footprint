import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Box, MenuItem, Select } from "@mui/material";
import { Container } from "@mui/system";
import { CurrencyContext } from "../CurrencyContext";

// import axios from "axios";
// import { currencies } from "../config/apis";

const Navbar = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  const updateCurrency = (e) => {
    setCurrency(e.target.value);
  };

  /* 
		Thsi fetch supported currencies from Gecko Api ans tried to create <MenuItems> by mapping over the array of supported currencies	

		const [currencyList, setCurrencyList] = useState([]);

		const fetchCurrecies = async () => {
			const { data } = await axios.get(currencies);
			setCurrencyList(data);
		};

		useEffect(() => {
			fetchCurrecies();
		}, []);

		console.log(currencyList);
	*/

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              color="#48eda8"
              sx={{
                fontWeight: "800",
                fontFamily: "Montserrat",
              }}
            >
              Coin Footprint
            </Typography>
            <Box width="90px">
              <Select
                value={currency}
                onChange={(e) => updateCurrency(e)}
                fullWidth
                size="small"
                varient="filled"
                sx={{ color: "#48eda8", outlineColor: "white" }}
              >
                <MenuItem value="INR">INR</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
              </Select>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
