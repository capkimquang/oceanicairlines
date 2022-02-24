import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./routing-components/LandingPage";
import "./App.css";
import ResponsiveAppBar from "./container-components/Appbar";
import React from "react";
import Dashboard from "./routing-components/Dashboard";
import CreateOrder from "./routing-components/CreateOrder";
import Orders from "./routing-components/Orders";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes basename="/">
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/orders" element = {<Orders />} />
          <Route exact path="/order/create" element={<CreateOrder />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
