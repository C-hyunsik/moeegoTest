import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <button>고객센터/문의</button>
        <button>개인정보 보호정책</button>
      </div>
      <p>E-mail: support@soomgo.com | Copyright © Soomgo</p>
    </footer>
  );
}

export default Footer;