import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Countries from './components/Countries';
import './App.css';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { fetchCountries } from './redux/countries/countriesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Navbar>Most Views</Navbar>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route
            path="/country/:id"
            element={<CountryDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
