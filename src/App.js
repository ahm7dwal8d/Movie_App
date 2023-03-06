import React, { Fragment } from "react";
import Header from './Component/Header/Header';
import Index from "./Component/Index/Index"
import Movies from './Component/Movies/Movies';
import { Routes, Route } from "react-router-dom";
import './App.css';




function App() {

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/Movies' element={<Movies />} />
    </Routes>
    </Fragment>
  );
}

export default App;
