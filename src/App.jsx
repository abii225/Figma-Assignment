import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="h-[1000px]">hi</div>
      </div>
    </>
  );
}

export default App;
