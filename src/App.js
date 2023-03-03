import React from "react";
import Nav from "./components/Nav/Nav";
import PaymentOptions from "./components/Payment/PaymentOptions";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

const App = () => {
  return (
    <>
      <Nav />

      <Sidebar />
      <PaymentOptions />
    </>
  );
};

export default App;
