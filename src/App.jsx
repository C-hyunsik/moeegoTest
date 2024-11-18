import "./App.css";
import React from "react";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Write from "./components/articles/Write";
import Update from "./components/articles/Update";
import Review from "./components/mypage/Review";
import FreeBoardForm from "./components/articles/FreeBoardForm/FreeBoardForm.jsx";
import ViewPage from "./components/articles/ViewPage/ViewPage.jsx";
import ProSearch from "./components/ProSearch/ProSearch";
import MainPage from './components/mainPage';
import Home_interior from './components/detail_category/Home_interior';
import Outsourcing from './components/detail_category/Outsourcing';
import Fashion_beauty from './components/detail_category/Fashion_beauty';
import Study from './components/detail_category/Study';
import Hobby from './components/detail_category/Hobby';
import Car from './components/detail_category/Car';
import About from './components/about/About';
import ProView from "./components/Pro/ProView";
import MyPage from './components/mypage/MyPage';
import MyHistory from './components/mypage/MyHistory';
import MyArticles from './components/mypage/MyArticles';
import MyComments from './components/mypage/MyComments';
import Private from './components/mypage/Private';
import Account from './components/mypage/account';
import ChangeAddress from './components/mypage/ChangeAddress';
import ChangePassword from './components/mypage/ChangePassword';
import ChangeEmail from './components/mypage/ChangeEmail';
import SignOut from './components/mypage/SignOut';
import MyReservation from './components/mypage/MyReservation';
import Success from './components/mypage/Success';
import Login from "./components/login/Login";
import Join from "./components/join/Join";
import ProMain from "./components/pro/ProMain";
import Prosignup from "./components/pro/Prosignup";
import ProSub from "./components/pro/ProSub";
import Banner from "./components/mainpage/Banner.jsx";
import Reviews from "./components/mainpage/Reviews.jsx";
import CleaningSection from "./components/mainpage/CleaningSection.jsx";
import Locations from "./components/mainpage/Locations.jsx";
import ArticleMain from './components/articles/ArticleMain.jsx';
import myHistory from "./components/mypage/MyHistory.jsx";

const App = () => {
  return (
    <div className='main-content'>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* 메인페이지 */}
          <Route path={"/"} element={<MainPage />} />

          {/* 카테고리 페이지 */}
          <Route path={"/category/home"} element={<Home_interior />} />
          <Route path={"/category/outsourcing"} element={<Outsourcing />} />
          <Route path={"/category/fashion"} element={<Fashion_beauty />} />
          <Route path={"/category/study"} element={<Study />} />
          <Route path={"/category/hobby"} element={<Hobby />} />
          <Route path={"/category/car"} element={<Car />} />
          <Route path={"/about"} element={<About />} />
          <Route path="/pro/search" element={<div className="main-content"><ProSearch /></div>} />
          <Route path="/pro" element={<div className="main-content"><ProView /></div>} />

          {/* 개별 페이지로 접근할 수 있도록 각각 라우트 설정 */}
          <Route path="/banner" element={<div className="main-content"><Banner /></div>} />
          <Route path="/reviews" element={<div className="main-content"><Reviews /></div>} />
          <Route path="/cleaning" element={<div className="main-content"><CleaningSection /></div>} />
          <Route path="/locations" element={<div className="main-content"><Locations /></div>} />

          <Route path="/article/Write" element={<div className="main-content"><Write /></div>} />
          <Route path="/article/Update" element={<div className="main-content"><Update /></div>} />
          <Route path="/mypage/Review" element={<div className="main-content"><Review /></div>} />

          {/* 마이페이지 */}
          <Route path={"/mypage"} element={<MyPage />} />
          <Route path={"/mypage/reservation"} element={<MyReservation />} />
          <Route path={"/mypage/myhistory"} element={<MyHistory/>}/>
          <Route path={"/mypage/myhistory/myarticle"} element={<MyArticles/>}/>
          <Route path={"/mypage/myhistory/mycomment"} element={<MyComments/>}/>
          <Route path={"/mypage/account"} element={<Account />} />
          <Route path={"/mypage/account/private"} element={<Private />} />
          <Route path={"/mypage/account/private/email"} element={<ChangeEmail />} />
          <Route path={"/mypage/account/private/password"} element={<ChangePassword />} />
          <Route path={"/mypage/account/private/address"} element={<ChangeAddress />} />
          <Route path={"/mypage/account/private/signout"} element={<SignOut />} />
          <Route path={"/mypage/account/private/success"} element={<Success />} />
          

          {/* 커뮤니티 페이지 */}
          <Route path={"/article"} element={<div className="main-content"><ArticleMain /></div>} />
          <Route path={"/article/free"} element={<div className="main-content"><FreeBoardForm /></div>} />
          <Route path={"/article/viewpage"} element={<div className="main-content"><ViewPage /></div>} />

          {/* 회원가입/로그인 페이지 */}
          <Route path="/login" element={<div className="main-content"><Login /></div>} />
          <Route path="/signup" element={<div className="main-content"><Join /></div>} />

          {/* 달인 가입 페이지 */}
          <Route path="/pro/signup/main" element={<div className="main-content"><ProMain /></div>} />
          <Route path="/pro/signup/sub" element={<div className="main-content"><ProSub /></div>} />
          <Route path="/pro/signup" element={<div className="main-content"><Prosignup /></div>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
