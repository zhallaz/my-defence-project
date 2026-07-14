import React, { useState } from "react";
import reactDom from "react-dom/client";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import LoginPopup from "./Components/LoginPopup/LoginPopup.jsx";
import Payment from "./Pages/Payment/Payment.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <> </>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<PlaceOrder />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
