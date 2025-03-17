import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import('./components/Home'))
const Shop = React.lazy(() => import('./components/Shop'))
const Paddys = React.lazy(() => import('./components/Paddys'))
const LinkedIn = React.lazy(() => import('./components/LinkedIn/LinkedIn'))
const Search = React.lazy(() => import('./components/Journey/Search'))
const Next = React.lazy(() => import("./components/LinkedIn/Next"))
const BlackPanther = React.lazy(() => import('./components/240/BlackPanther'))
const Like = React.lazy(() => import('./components/Peace/Like'))
const Chasing = React.lazy(() => import('./components/Storm/Chasing'))
const Shrimp = React.lazy(() => import('./components/Seafood/Shrimp'))
const Bunny = React.lazy(() => import('./components/Easter/Bunny'))
const Cola = React.lazy(() => import('./components/Soda/Cola'))
const BuildToday = React.lazy(() => import('./components/Github/BuildToday'))
const Future = React.lazy(() => import('./components/AI/Future'))
const Summer = React.lazy(() => import('./components/Hot/Summer'))
const MickeyDees = React.lazy(() => import('./components/Mcdonalds/MickeyDees'))
const NotAlone = React.lazy(() => import('./components/UFO/NotAlone'))
const XJobSearch = React.lazy(() => import('./components/JobSearch/XJobSearch'))

function App() {
  return (
    <>
      <Suspense fallback={
        <section className="bg-black text-blue-300 font-caption text-center flex flex-time min-h-screen">
          <p className="text-3xl md:text-7xl  text-blue-500">Loading UI Projects</p>
        </section>
      }>
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
      </Suspense>
    </>
  );
}

export default App;
