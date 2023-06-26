import { createSlice } from '@reduxjs/toolkit';

const mockCountries = [
  {
    name: 'Nigeria',
    flag: 'green-white',
    population: 207000000,
    region: 'west-africa'
  },
  {
    name: 'Ghana',
    flag: 'black-gold',
    population: 67000000,
    region: 'west-africa'
  },
  {
    name: 'Senegal',
    flag: 'green-orange',
    population: 87000000,
    region: 'west-africa'
  },
];

initialState = {
  countriesData: mockCountries,
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {}
})

export default countriesSlice.reducer;