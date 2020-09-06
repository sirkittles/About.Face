import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [logs, setLogs] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/products`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      }
    });
    setProducts(res.data.records);
  }

  useEffect(() => {
    getProducts();
  }, [setProducts]);

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
      <main>
        <Switch>
        <Route path="/products">
          <Products products={products} />
        </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
