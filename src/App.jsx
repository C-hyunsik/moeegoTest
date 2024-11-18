import React from 'react';
import MainPage from './components/mainPage';
import { Router, Route, Routes, BrowserRouter} from "react-router-dom";

import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Home_interior from './components/detail_category/Home_interior';
import Outsourcing from './components/detail_category/Outsourcing';
import Fashion_beauty from './components/detail_category/Fashion_beauty';
import Study from './components/detail_category/Study';
import Hobby from './components/detail_category/Hobby';
import Car from './components/detail_category/Car';
import About from './components/about/About';

const App = () => {
  return (
    <div className='main-content'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={"/"} element={<MainPage/>} />
          <Route path={"/category/home"} element={<Home_interior/>} />
          <Route path={"/category/outsourcing"} element={<Outsourcing />} />
          <Route path={"/category/fashion"} element={<Fashion_beauty/>} />
          <Route path={"/category/study"} element={<Study/>} />
          <Route path={"/category/hobby"} element={<Hobby/>} />
          <Route path={"/category/car"} element={<Car/>} />
          <Route path={"/about"} element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;