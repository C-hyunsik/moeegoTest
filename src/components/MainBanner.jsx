import React from "react";
import "./MainBanner.css";

function MainBanner() {
  return (
    <section className="main-banner">
      <h1>내가 찾던 모든 전문가, 모이고에서 한눈에!</h1>
      <div className="search-category">
        <input type="text" placeholder="검색어 입력" />
        <div className="categories">
          <div className="category-item">
            <img src="./src/image/home.png" alt="홈/인테리어"/>
            <span>홈/인테리어</span>
          </div>
          <div className="category-item">
            <img src="./src/image/si.png" alt="외주"/>
            <span>외주</span>
          </div>
          <div className="category-item">
            <img src="./src/image/fashion.png" alt="패션/뷰티"/>
            <span>패션/뷰티</span>
          </div>
          <div className="category-item">
            <img src="./src/image/study.png" alt="직무/과외"/>
            <span>직무/과외</span>
          </div>
          <div className="category-item">
            <img src="./src/image/hobby.png" alt="취미/자기계발"/>
            <span>취미/자기계발</span>
          </div>
          <div className="category-item">
            <img src="./src/image/car.png" alt="자동차"/>
            <span>자동차</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;