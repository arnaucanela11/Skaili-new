"use client";

import Image from "next/image";
import { useEffect } from "react";

const TechWrapper = ({ images }) => {
  useEffect(() => {
    const handleResize = () => {
      // Lógica para manejar el redimensionamiento del viewport
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Duplica el array de imágenes para un flujo continuo
  const duplicatedImages = [...images, ...images];

  return (
    <div className="tech__wrapper">
      <div className="tech__wrapper__div">
        <div
          className="marquee_marquee_item__zgJ8c"
          style={{ translate: "none", rotate: "none", scale: "none" }}
        >
          <div className="marquee_marquee_repeater__OjBTa">
            <ul className="about-partners_logos_list__cKcCq">
              {duplicatedImages.map((image, index) => (
                <li
                  key={index}
                  className="about-partners_logo_list_item__HqkHi"
                >
                  <Image src={image} alt={`Image ${index}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechWrapper;
