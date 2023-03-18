import React, { Fragment, useContext } from "react";
import Header from './Component/Header/Header';
import Index from "./Component/Index/Index"
import Movies from './Component/Movies/Movies';
import LoveMovies from "./Component/LoveMovies/LoveMovies.jsx"
import { Routes, Route } from "react-router-dom";
import { MoviesContext } from "./Context/MoviesContext/MoviesContaxt";
import Footer from "./Component/Footer/Footer";
import './App.css';


function App() {
  const themeContext = useContext(MoviesContext);
  const { theme, height } = themeContext;
  return (
    <div className={theme} style={{height}}>
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/Movies' element={<Movies />} />
        <Route path="/LoveMovies" element={<LoveMovies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
