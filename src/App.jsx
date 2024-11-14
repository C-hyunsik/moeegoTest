import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import Banner from "./components/Banner";
import Reviews from "./components/Reviews";
import CleaningSection from "./components/CleaningSection";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import "./App.css";

function HomePage() {
  return (
    <div className="main-content">
      <MainBanner />
      <Banner />
      <Reviews />
      <CleaningSection />
      <Locations />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* 메인 페이지에 모든 컴포넌트를 렌더링 */}
          <Route path="/" element={<HomePage />} />

          {/* 개별 페이지로 접근할 수 있도록 각각 라우트 설정 */}
          <Route path="/banner" element={<div className="main-content"><Banner /></div>} />
          <Route path="/reviews" element={<div className="main-content"><Reviews /></div>} />
          <Route path="/cleaning" element={<div className="main-content"><CleaningSection /></div>} />
          <Route path="/locations" element={<div className="main-content"><Locations /></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
