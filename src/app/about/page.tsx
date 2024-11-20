import React from "react";
import "../styles/about.css";
import Image from "next/image";


function About() {
  return (
    <div className="about">
      <div className="about-us">
        <div className="text-about">
          <h1><span>About</span> Us</h1>
          <h2>52 Years Of Experience In Hair cut!</h2>
          <p>
            "Brook presents your services with flexible, convenient and cdpoe
            layouts. You can select your favorite layouts & elements for cular
            ts with unlimited ustomization possibilities. Pixel-perfreplication
            of the designers is intended. Brook presents your services with
            flexible, convefnient and ent anipurpose layouts. You can select
            your favorite".
          </p>
          <Image
          src="/image/about-shape.png.webp"
          width={900}
          height={500}
          alt="about-shape"
          className="shape-img"
        />
        </div>
      </div>
    </div>
  );
}

export default About;
