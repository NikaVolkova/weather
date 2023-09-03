import React, { FC, ReactNode } from "react";

import { Route,Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from "./shared/Header/Header";
export enum RoutesList {
  Home = "/",
  MonthStatistics="/month-statistics",
}

function App() {
  return (
    <div className="container">
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route path={RoutesList.Home} element={<Home />} />
      <Route path={RoutesList.MonthStatistics} element={<MonthStatistics />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
