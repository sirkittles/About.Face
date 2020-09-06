import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Link to="/" className="title-header">
          <Header />
        </Link>
      </div>
      <nav>
        <NavBar />
      </nav>
    </div>
  );
}

export default App;
