import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./index.css"


export default function App() {
  const [sidebarColor, setSidebarColor] = useState("rgba(255, 20, 147, 0.2)");

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar color={sidebarColor} setColor={setSidebarColor} />
        <Body />
      </div>
      <Footer />
    </div>
  );
}
