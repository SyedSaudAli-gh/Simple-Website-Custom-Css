import Image from "next/image";
import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div>
          <Image
            src="/image/hero.jpg"
            width={10000}
            height={10000}
            alt="hero"
            className="hero-img"
          />
        </div>
        <div className="conteint">
          <h1>
            <span className="hair">HAIR</span> <span className="s">S</span>ALON
          </h1>
          <h2>STYLISH HAIR SALON</h2>
          <div className="discount">
            <div className="d-1">
              <span>
                Up to <br /> 20%
              </span>
            </div>
            <div className="d-2">
              <span>
                OFF <br /> Hurry
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hairStyle">
        <Image
          src="/image/2.jpeg"
          width={10000}
          height={10000}
          alt="hero"
          className="hairs style-2"
        />

        <Image
          src="/image/5.png"
          width={10000}
          height={10000}
          alt="hero"
          className="hairs style-5"
        />
        <Image
          src="/image/1.jpg"
          width={10000}
          height={10000}
          alt="hero"
          className="hairs style-1"
        />

        <Image
          src="/image/4.jpg"
          width={10000}
          height={10000}
          alt="hero"
          className="hairs style-4"
        />

        <Image
          src="/image/3.jpg"
          width={10000}
          height={10000}
          alt="hero"
          className="hairs style-3"
        />
        <Image
          src="/image/6.png"
          width={10000}
          height={10000}
          alt="hero"
          className="hairs style-6"
        />

        <Image
          src="/image/7.png"
          width={10000}
          height={10000}
          alt="hero"
          className="hairs style-6"
        />
      </div>
    </>
  );
}

export default Hero;
