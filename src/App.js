import React from "react";

import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import "./style.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <input type="checkbox" id="darkmode" />
      <label htmlFor="darkmode">
        <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
      </label>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Section1/>}></Route>
          <Route path="/skills" element={<Section3/>}></Route>
          <Route path="/projects" element={<Section4/>}></Route>
          <Route path="/about" element={<Section5/>}></Route>
        </Routes>
        {/* <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 /> */}
      </div>{" "}
    </div>
  );
}

export default App;
