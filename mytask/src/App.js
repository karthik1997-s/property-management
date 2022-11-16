import "./App.css";
import Login from "./components/login";
import CustomerDetails from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Tabledata from "./components/TableData";
import Chart from "./components/Chart";
import Info from "./components/Info";
import AddTitle from "./components/AddTitle";
import Details from "./components/CustomerDetails";
import { Usercontext } from "./context/Usercontext";

function App() {
  const [state, setState] = useState({});

  return (
    <div className="App">
      <Usercontext.Provider value={{ state, setState }}>
        <Routes>
          <Route index path="/" element={<Login />} />

          <Route path="dashboard" element={<CustomerDetails />}>
            <Route path="data" element={<Tabledata />} />
            <Route path="chart" element={<Chart />} />
            <Route path="info" element={<Info />} />
            <Route path="titleform" element={<AddTitle />} />
            <Route path="records/:id" element={<Details />} />
          </Route>
        </Routes>
      </Usercontext.Provider>
      {/* <AddTitle /> */}
    </div>
  );
}

export default App;
