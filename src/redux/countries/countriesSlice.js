import { createSlice } from '@reduxjs/toolkit';

const mockCountries = [
  {
    name: 'Nigeria',
    flag: 'green-white',
    population: 207000000,
    region: 'west-africa',
    id: 1,
  },
  {
    name: 'Ghana',
    flag: 'black-gold',
    population: 67000000,
    region: 'west-africa',
    id: 2,
  },
  {
    name: 'Senegal',
    flag: 'green-orange',
    population: 87000000,
    region: 'west-africa',
    id: 3,
  },
];

const initialState = {
  countriesData: mockCountries,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
