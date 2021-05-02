import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./components/Search";
import List from "./components/List";

function App() {
  const [allEmps, setAllEmps] = useState([]);
  const [filterEmps, setFilterEmps] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then((results) => {
      console.log("USEEFFECT");
      setAllEmps(results.data.results);
      setFilterEmps(results.data.results);
    });
  }, []);

  const firstClick = () => {
    let empList = filterEmps;
    empList.sort(function (a, b) {
      if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1;
      if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) return 1;
      return 0;
    });
    setFilterEmps([...empList]);
  };

  const lastClick = () => {
    let empList = filterEmps;
    empList.sort(function (a, b) {
      if (a.name.last.toLowerCase() < b.name.last.toLowerCase()) return -1;
      if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) return 1;
      return 0;
    });
    setFilterEmps([...empList]);
  };

  const search = (event, chars) => {
    event.preventDefault();
    let empList = allEmps.filter(
      (employee) =>
        employee.name.first.toLowerCase().includes(chars.toLowerCase()) ||
        employee.name.last.toLowerCase().includes(chars.toLowerCase())
    );
    setFilterEmps(empList);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Employee Directory</h1>
      <Search search={search} />
      <List
        firstClick={firstClick}
        lastClick={lastClick}
        employees={filterEmps}
      />
    </>
  );
}

export default App;
