import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Box, MenuItem, Select } from "@mui/material";
import { Container } from "@mui/system";
import { CurrencyContext } from "../CurrencyContext";
import { useNavigate } from "react-router-dom";
import LoginModal from "./Authentication/LoginModal";
import UserSidebar from "./Authentication/UserSidebar";

// import axios from "axios";
// import { currencies } from "../config/apis";

const Navbar = () => {
  const { currency, setCurrency, user } = useContext(CurrencyContext);

  const updateCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const navigate = useNavigate();

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

  // console.log(user);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Container
            sx={{
              width: "70%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              onClick={() => {
                navigate("/");
              }}
              variant="standard"
              color="#48eda8"
              sx={{
                fontSize: "1.4rem",
                fontWeight: "800",
                fontFamily: "Montserrat",
                cursor: "pointer",
              }}
            >
              Coin Footprint
            </Typography>
            <Box
              width="90px"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Select
                value={currency}
                onChange={(e) => updateCurrency(e)}
                fullWidth
                size="small"
                varient="filled"
                sx={{ color: "#48eda8", minWidth: "80px", height: "40px" }}
              >
                <MenuItem value="INR">INR</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
              </Select>
              {!user ? <LoginModal /> : <UserSidebar />}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
