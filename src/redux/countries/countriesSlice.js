import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const mockCountries = [
//   {
//     name: 'Nigeria',
//     flag: 'green-white',
//     population: 207000000,
//     region: 'west-africa',
//     id: 1,
//   },
//   {
//     name: 'Ghana',
//     flag: 'black-gold',
//     population: 67000000,
//     region: 'west-africa',
//     id: 2,
//   },
//   {
//     name: 'Senegal',
//     flag: 'green-orange',
//     population: 87000000,
//     region: 'west-africa',
//     id: 3,
//   },
// ];

const initialState = {
  countriesData: [],
};

const DISPLAYCOUNTRIES = 'population-metrics-app/redux/countries/countriesSlice/DISPLAYCOUNTRY';

const URL = 'https://restcountries.com/v3.1/region/africa';

export const fetchCountries = createAsyncThunk(DISPLAYCOUNTRIES, async () => {
  const response = await axios.get(URL);
  const result = response.data;

  return {
    countries: result.map((country) => ({
      id: country.area,
      population: country.population,
      name: country.name.official,
      capital: country.capital[0],
      image: country.flags.png,
      timezone: country.timezones[0],
      subregion: country.subregion,
    })),
  };
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countriesData = action.payload.countries;
    });
  },
});

export default countriesSlice.reducer;
