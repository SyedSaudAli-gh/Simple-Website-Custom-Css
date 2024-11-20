"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/header.css"; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
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

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
