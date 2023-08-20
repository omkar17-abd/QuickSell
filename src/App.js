import React, { useEffect, useState } from "react";
import "../src/components/Home/home.css";
import Home from "./components/Home/Home";
import Header from "./components/common/header/Header";

const App = () => {
  const [ticketsData, setTicketsData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [displayInput, setDisplayInput] = useState({
    status: "status",
    priority: "priority"
  });

  useEffect(() => {
    async function getApiUrl() {
      const res = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await res.json();
      setTicketsData(data.tickets);
      setUserData(data.users);
    }
    getApiUrl();
  }, []);

  const getData = (data) => {
    setDisplayInput(data);
  };

  return (
    <div className="app">
      <Header
        ticketData={ticketsData}
        handleSubmit={getData}
        userData={userData}
      />
      <Home
        ticketData={ticketsData}
        receiveData={displayInput}
        userData={userData}
      />
    </div>
  );
};

export default App;
