import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from "./components/navbar/Navbar";
import Single from "./components/SinglePage/Single";
import Cart from "./pages/cart/Cart";
import Layout from "./pages/layout/Layout";

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route exact path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/product/:Id" element={<Single />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog/:category" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
