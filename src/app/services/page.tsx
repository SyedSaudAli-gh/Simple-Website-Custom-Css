import React from "react";
import "../styles/service.css";
import Image from "next/image";

function Services() {
  return (
    <div className="service">
      <div className="text-service">
        <h2>
          <span>Professional</span> Services
        </h2>
        <h1>Our Best services that we offering to you</h1>
      </div>
      <div className="service-card">
        <div className="card-1">
          <Image
            src="/image/hair-cut-1.png"
            width={120}
            height={120}
            alt="hero"
            className="card-img"
          />
          <span>Stylish Hair Cut</span>
          <p>
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>



        <div className="card-1">
          <Image
            src="/image/massege.png"
            width={120}
            height={120}
            alt="hero"
            className="card-img"
          />
          <span>Body Massege</span>
          <p>
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>


        <div className="card-1">
          <Image
            src="/image/Breard Style.JPG"
            width={120}
            height={120}
            alt="hero"
            className="card-img"
          />
          <span>Breard Style</span>
          <p>
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>


        <div className="card-1">
          <Image
            src="/image/Breard Style.JPG"
            width={120}
            height={120}
            alt="hero"
            className="card-img"
          />
          <span>Breard Style</span>
          <p>
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>


        <div className="card-1">
          <Image
            src="/image/massege.png"
            width={120}
            height={120}
            alt="hero"
            className="card-img"
          />
          <span>Body Massege</span>
          <p>
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>



        <div className="card-1">
          <Image
            src="/image/hair-cut-1.png"
            width={120}
            height={120}
            alt="hero"
            className="card-img"
          />
          <span>Stylish Hair Cut</span>
          <p>
            Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
            incididunt ut laborea.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
