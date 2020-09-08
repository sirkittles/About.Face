import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Logs from "./components/Logs";
import "./App.css";
import CreateLog from "./components/CreateLog";

function App() {
  const [products, setProducts] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [logs, setLogs] = useState([]);
  const [getLogs, setGetLogs] = useState("");

  const getLogsData = async () => {
    const res = await axios.get(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/logs`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    setLogs(res.data.records);
  };

  useEffect(() => {
    getLogsData();
  }, [getLogs]);

  // const getProductsData = async () => {
  //   const res = await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/products`, {
  //     headers: {
  //       'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //     }
  //   });
  //   setProducts(res.data.records);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, [setProducts]);

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
            {/* <Products products={products} /> */}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
