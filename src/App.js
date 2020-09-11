import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Logs from "./components/Logs";
import CreateLog from "./components/CreateLog";
import Routines from "./components/Routines";
import AddRoutine from "./components/AddRoutine.jsx";
import AddProduct from "./components/AddProduct.jsx";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [getProducts, setGetProducts] = useState("");
  const [routines, setRoutines] = useState([]);
  const [getRoutines, setGetRoutines] = useState("");
  const [logs, setLogs] = useState([]);
  const [getLogs, setGetLogs] = useState("");

  const getLogsData = async () => {
    const res = await axios.get(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/logs`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
    const sortedLogs = res.data.records.sort((a, b) => {
      const firstDate = new Date(a.fields.dateSaved);
      const secondDate = new Date(b.fields.dateSaved);
      return secondDate - firstDate;
    });
    setLogs(sortedLogs);
  };

  useEffect(() => {
    getLogsData();
  }, [getLogs]);

  const getProductsData = async () => {
    const res = await axios.get(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/products`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
    setProducts(res.data.records);
  };

  useEffect(() => {
    getProductsData();
  }, [getProducts]);

  const getRoutinesData = async () => {
    const res = await axios.get(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/routines`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    setRoutines(res.data.records);
  };

  useEffect(() => {
    getRoutinesData();
  }, [getRoutines]);

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
          <Route exact path="/">
            <div className="logs-container">
              <h4>Skincare Logs</h4>
              <CreateLog getLogs={getLogs} setGetLogs={setGetLogs} />
              {logs.map((log) => (
                <Logs
                  log={log}
                  key={log.id}
                  getLogs={getLogs}
                  setGetLogs={setGetLogs}
                />
              ))}
            </div>
          </Route>
          <Route path="/products">
            <div className="products-container">
              <h4>Product List</h4>
              <AddProduct
                getProducts={getProducts}
                setGetProducts={setGetProducts}
              />
              <div className="products-list-container">
                {products.map((product) => (
                <Product product={product} key={product.id} />
                ))}
              </div>
            </div>
          </Route>
          <Route path="/routines">
            <div className="routines-container">
              <h4>Routines</h4>
              <AddRoutine
                getRoutines={getRoutines}
                setGetRoutines={setGetRoutines}
                products={products}
              />
              <Routines
                products={products}
                routines={routines}
                getRoutines={getRoutines}
                setGetRoutines={setGetRoutines}
              />
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
