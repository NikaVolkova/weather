import React, { FC, ReactNode } from "react";

import { Route,Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from "./shared/Header/Header";
import {Popup} from './shared/Popup/Popup';
export enum RoutesList {
  Home = "/",
  MonthStatistics="/month-statistics",
}

function App() {
  return (
    <div className="global-container">
     {/* <Popup /> */}
    <div className="container">
      
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route path={RoutesList.Home} element={<Home />} />
      <Route path={RoutesList.MonthStatistics} element={<MonthStatistics />} />
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
