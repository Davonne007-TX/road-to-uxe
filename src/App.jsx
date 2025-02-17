import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Paddys from "./components/Paddys";
import LinkedIn from "./components/LinkedIn/LinkedIn";
import Search from "./components/Journey/Search";
import Next from "./components/LinkedIn/Next";
import BlackPanther from "./components/240/BlackPanther";
import Like from "./components/Peace/Like";
import Chasing from "./components/Storm/Chasing";
import Shrimp from "./components/Seafood/Shrimp";
import Bunny from "./components/Easter/Bunny";
import Cola from "./components/Soda/Cola";
import BuildToday from "./components/Github/BuildToday";
import Future from "./components/AI/Future";
import Summer from "./components/Hot/Summer";
import MickeyDees from "./components/Mcdonalds/MickeyDees";
import NotAlone from "./components/UFO/NotAlone";
import XJobSearch from "./components/JobSearch/XJobSearch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/st-patricks-day" element={<Paddys />} />
        <Route path="/linkedIn" element={<LinkedIn />} />
        <Route path="/search" element={<Search />} />
        <Route path="/next" element={<Next />} />
        <Route path="/blackPanther" element={<BlackPanther />} />
        <Route path="/like" element={<Like />} />
        <Route path="/chasing" element={<Chasing />} />
        <Route path="/seafood" element={<Shrimp />} />
        <Route path="/easter" element={<Bunny />} />
        <Route path="/cola" element={<Cola />} />
        <Route path="/together" element={<BuildToday />} />
        <Route path="/future" element={<Future />} />
        <Route path="/summer" element={<Summer />} />
        <Route path="/mickeyDees/" element={<MickeyDees />} />
        <Route path="/ufo" element={<NotAlone />} />
        <Route path="/xJobSearch" element={<XJobSearch />} />
      </Routes>
    </>
  );
}

export default App;

//need to do react lazy
