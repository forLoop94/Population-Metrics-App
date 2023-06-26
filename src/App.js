import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';
import './App.css';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
