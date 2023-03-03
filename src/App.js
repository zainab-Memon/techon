import React from "react";
import Nav from "./components/Nav/Nav";
import PaymentOptions from "./components/Payment/PaymentOptions";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Footer from "./components/footer/Footer";
import Recent from "./components/RecentPayment/Recent";

const App = () => {
  return (
    <>
      <Nav />

      <Sidebar />
      <PaymentOptions />
      <Footer />
      <Recent />
    </>
  );
};

export default App;
