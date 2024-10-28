import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar";
import Home from './components/home/home';
import Story from "./components/story/Story";
import Films from "./components/films/Films"

function App() {
  const body = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  };
  
  return (
    <BrowserRouter>
      <div style={body}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/story" element={<Story />} />
          <Route exact path="/films" element={<Films />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
