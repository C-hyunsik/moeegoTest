import React from "react";
import "./MainBanner.css";

function MainBanner() {
  return (
    <section className="main-banner">
      <h1>내가 찾던 모든 전문가, 모이고에서 한눈에!</h1>
      <div className="search-category">
        <input type="text" placeholder="검색어 입력" />
        <div className="categories">
          <span>운/연애타로</span>
          <span>웨딩</span>
          <span>레슨/과외</span>
          <span>체육/레저</span>
          <span>취미/자격증</span>
          <span>자동차</span>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;