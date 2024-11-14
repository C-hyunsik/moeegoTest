import React from "react";
import "./Header.css";

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
        </nav>
      </div>
    </header>
  );
}

export default Header;