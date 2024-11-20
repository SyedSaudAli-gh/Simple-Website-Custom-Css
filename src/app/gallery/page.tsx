import React from 'react'
import Image from 'next/image'
import "../styles/gallery.css";

function Gallery() {
    const images = [
      { src: '/image/g-1.jpg', alt: 'gallery 1', width: 1000, height: 1000 },
      { src: '/image/g-2.jpg', alt: 'gallery 2', width: 1000, height: 1000 },
      { src: '/image/g-3.jpg', alt: 'gallery 3', width: 1000, height: 1000 },
      { src: '/image/g-4.jpg', alt: 'gallery 4', width: 1000, height: 1000 },
      { src: '/image/g-5.jpg', alt: 'gallery 5', width: 1000, height: 1000 },
      { src: '/image/g-6.jpg', alt: 'gallery 6', width: 1000, height: 1000 },
      { src: '/image/g-7.jpg', alt: 'gallery 7', width: 1000, height: 1000 },
      { src: '/image/g-9.jpg', alt: 'gallery 9', width: 1000, height: 1000 },
    ];
  
    return (
      <>
      <h1 className='gallery-h1'>Gallery</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <div key={index} className="box">
            <Image src={img.src} alt={img.alt} width={img.width} height={img.height} />
          </div>
        ))}
      </div>
      </>
    );
  }
  
  export default Gallery;