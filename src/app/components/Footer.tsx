import React from "react";
import "../styles/footer.css";
import Image from "next/image";

function Footer() {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="f-1">
          <div className="navbar-brand">
            <a href="/">
              <Image
                src="/image/pf-logo.png"
                width={100}
                height={100}
                alt="Logo"
                className="logo"
              />
              <h1>M.GEN.</h1>
            </a>
          </div>
          <div className="contact">
            <a href="tel:" className="tel">
              <span>+92-348</span>-2554902
            </a>
            <a href="mailto:" className="mail">
              saud.saleem93@gmail.com
            </a>
          </div>
        </div>
        <div className="f-2">
          <h1>Location</h1>
          <a href="">Advanced</a>
          <a href="">Management</a>
          <a href="">Corporate</a>
          <a href="">Customer</a>
          <a href="">Information</a>
        </div>
        <div className="f-2">
          <h1>More Detail</h1>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Serviecs</a>
          <a href="">Gallery</a>
          <a href="">Contact</a>
        </div>
        <div className="f-3">
          <h1>Location</h1>
          <h2>Subscribe now to get daily updates</h2>
          <div className="input">
          <input type="text" placeholder="Email Address" />
          <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
