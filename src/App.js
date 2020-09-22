import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import InfoBox from "./InfoBox";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  //*code for pulling the countries from api for dropdown
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  //*Code for selecting the dropdown
  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    console.log(">>>>>>>>>>", countryCode);
    setCountry(countryCode);
  };
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        {/* <header></header> */}
        {/* <title , select dropdown> */}
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">WorldWide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* infoboxes */}
      {/* infoboxes */}
      {/* infoboxes */}
      <div className="app__stats">
        <InfoBox></InfoBox>
      </div>

      {/* table */}
      {/* graph */}
      {/* map */}
    </div>
  );
}

export default App;
