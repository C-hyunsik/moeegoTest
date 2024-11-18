import React from "react";
import "../css/Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="topWrap">
        <div className="logo">MoeeGo</div>
        <nav className="nav">
          <a href="#">고수찾기</a>
          <a href="#">커뮤니티</a>
          <input type="text" placeholder="필요한 검색어를 입력하세요" />
          <a href="#">가입</a>
          <a href="#">로그인</a>
          <Link to="/mypage">마이페이지</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;