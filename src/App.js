import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>;<Hero></Hero>;<HeadlineCards></HeadlineCards>;
      <Food></Food>;<Categories></Categories>;
    </div>
  );
}

export default App;
