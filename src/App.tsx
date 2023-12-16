import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DashboardContext } from "./context";
import Dashboard from "./Dashboard";

function App() {
  const user = {
    isSubscribed: true,
    name: "My",
  };
  return (
    <DashboardContext.Provider value={user}>
      <Dashboard />
    </DashboardContext.Provider>
  );
}

export default App;
