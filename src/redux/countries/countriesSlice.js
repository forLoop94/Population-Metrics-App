import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countriesData: [],
};

const DISPLAYCOUNTRIES = 'population-metrics-app/redux/countries/countriesSlice/DISPLAYCOUNTRIES';
const DISPLAYCOUNTRY = 'population-metrics-app/redux/countries/countriesSlice/DISPLAYCOUNTRY';

const URL = 'https://restcountries.com/v3.1/region/africa';
const countryURL = 'https://restcountries.com/v3.1/name';

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

export const fetchCountry = createAsyncThunk(DISPLAYCOUNTRY, async (name) => {
  try {
    const res = await axios.get(`${countryURL}/${name}`);
    return [
      {
        id: res.data[0].area,
        population: res.data[0].population,
        name: res.data[0].name.official,
        capital: res.data[0].capital[0],
        image: res.data[0].flags.png,
        timezone: res.data[0].timezones[0],
        subregion: res.data[0].subregion,
      },
    ];
  } catch (error) {
    return error;
  }
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countriesData = action.payload.countries;
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.countriesData = action.payload;
      });
  },
});

export default countriesSlice.reducer;
