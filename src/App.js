import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
