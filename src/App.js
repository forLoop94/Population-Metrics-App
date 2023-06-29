import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import './App.css';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar>Most Views</Navbar>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
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
