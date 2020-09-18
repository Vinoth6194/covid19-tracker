import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState(["USA", "UK", "INDIA"]);
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        {/* <header></header> */}
        {/* <title , select dropdown> */}
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* infoboxes */}
      {/* infoboxes */}
      {/* infoboxes */}
      {/* table */}
      {/* graph */}
      {/* map */}
    </div>
  );
}

export default App;
