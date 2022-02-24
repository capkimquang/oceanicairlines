import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './routing-components/LandingPage';
import './App.css';
import HomePage from './routing-components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes basename = "/">
        <Route exact path = "/" element = { <LandingPage /> } />
        <Route exact path = "/home" element = { <HomePage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
