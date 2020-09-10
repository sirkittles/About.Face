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
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    setLogs(res.data.records);
  };

  useEffect(() => {
    getLogsData();
  }, [getLogs]);

  const getProductsData = async () => {
    const res = await axios.get(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/products`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    setProducts(res.data.records);
  };

  useEffect(() => {
    getProductsData();
  }, [getProducts]);

  const getRoutinesData = async () => {
    const res = await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/routines`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
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
              {logs.map((log) => (
                <Logs
                  log={log}
                  key={log.id}
                  getLogs={getLogs}
                  setGetLogs={setGetLogs}
                />
              ))}
            </div>
            <CreateLog
              getLogs={getLogs}
              setGetLogs={setGetLogs}
            />
          </Route>
          <Route path="/products">
            <div className="products-container">
              <h4>Product List</h4>
              {products.map((product) => (
                <Product
                  product={product}
                  key={product.id}
                />
              ))}
            </div>
          </Route>
          <Route path="/routines">
            <div className="routines-container">
              <h4>Routines</h4>
              <Routines
                products={products}
                routines={routines}
                getRoutines={getRoutines}
                setGetRoutines={setGetRoutines}
              />
            </div>
            <AddRoutine
              getRoutines={getRoutines}
              setGetRoutines={setGetRoutines}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
