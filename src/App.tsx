import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Phone from "./components/phone";
import Phoneinfo from "./components/phone-info";
import Carts from "./components/carts";
import { BrowserRouter } from "react-router-dom";

import { phonesData, PhonesDataType } from "./services/phone";
import "./index.css";

//

function App() {
  const [phones, setPhones] = useState<PhonesDataType>(phonesData);
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Phone phones={phones} setPhones={setPhones} />}
            />
            <Route path="/info" element={<Phoneinfo />} />
            <Route
              path="/carts"
              element={<Carts phones={phones} setPhones={setPhones} />}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
