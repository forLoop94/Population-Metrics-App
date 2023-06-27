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
  return result;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countriesData = action.payload;
    });
  },
});

export default countriesSlice.reducer;
