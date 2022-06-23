import React, { useState } from "react";
import { TextField } from "@mui/material";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <TextField
        fullWidth
        label="Search for a coin..."
        id="outlined-basic"
        variant="outlined"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
