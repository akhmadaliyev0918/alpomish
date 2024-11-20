import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from "./components/navbar/Navbar";
import Single from "./components/SinglePage/Single";
import Cart from "./pages/cart/Cart";
import Layout from "./pages/layout/Layout";
import Leyout from "./pages/leyout/Leyout";
import Deshbourd from "./pages/Deshbourd/Deshbourd";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation()

  const isAuthRoute = location.pathname.startsWith("/profile")
  return (
    <div className="App">
      {!isAuthRoute && <Navbar setSearchQuery={setSearchQuery} />}

      <Routes>
        <Route exact path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/product/:Id" element={<Single />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog/:category" element={<Layout />} />
        <Route path="/profile" element={<Leyout />} />
        <Route path="/profile/deshbourd" element={<Deshbourd />} />
      </Routes>
    </div>
  );
}

export default App;
