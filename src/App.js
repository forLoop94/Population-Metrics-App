import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { fetchCountries } from './redux/countries/countriesSlice';
import Home from './components/Home';

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
          <Route path="/" element={<Home />} />
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
