import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./routing-components/LandingPage";
import "./App.css";
import ResponsiveAppBar from "./container-components/Appbar";
import React from "react";
import Dashboard from "./routing-components/Dashboard";
import CreateOrder from "./routing-components/CreateOrder";
import Orders from "./routing-components/Orders";
import Employees from "./routing-components/Employees";
import ModifyEmployee from "./routing-components/ModifyEmployee";

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
          <Route exact path="/employees" element = {<Employees />} />
          <Route exact path="/employee/modify" element = {<ModifyEmployee />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
