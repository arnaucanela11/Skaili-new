"use client";
import { poppins } from "./MainScreen";
import "./components.css";
import PointPattern1 from "../assets/Point_pattern1.png";
import Carousel1 from "../assets/Carousel1.png";
import Carousel2 from "../assets/Carousel2.png";
import Carousel3 from "../assets/Carousel3.png";
import Carousel4 from "../assets/Carousel4.png";
import Carousel5 from "../assets/Carousel5.png";
import Carousel6 from "../assets/Carousel6.png";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function About() {
  return (
    <section className="about__main__section" id="about__section">
      <span className={`about__section__name ${poppins.className}`}>
        WHO WE ARE?
      </span>
      <div className="about__main__text__div">
        <h2 className={`about__main__text ${poppins.className}`}>
          We are a{" "}
          <span className="text-[#3B71FE]">
            digitalitzation agency in <br />
            Barcelona
          </span>{" "}
          focused on helping businesses to achieve their{" "}
          <span className="underline">digital transformation</span>
        </h2>
        <span className={`about__main__description ${poppins.className}`}>
          Our team of digital product creators and Tch Bring Skilled will take
          your idea to the next level.
        </span>
      </div>
      <Image
        src={PointPattern1}
        alt="point__pattern"
        className="about__point__pattern"
      />
      <div className="container carousel__container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"2"}
          spaceBetween={0} // Sin espacio entre diapositivas
          coverflowEffect={{
            rotate: 0,
            stretch: 0, // Ajusta el efecto de "stretch" para evitar separación
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 2000, // Tiempo entre diapositivas (en milisegundos)
            disableOnInteraction: true, // Detener auto-play cuando el usuario interactúa
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".my-custom-next",
            prevEl: ".my-custom-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          <SwiperSlide>
            <Image src={Carousel1} alt="slide_image" className="carousel__image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Carousel5} alt="slide_image" className="carousel__image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Carousel4} alt="slide_image" className="carousel__image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Carousel2} alt="slide_image" className="carousel__image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Carousel3} alt="slide_image" className="carousel__image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Carousel6} alt="slide_image" className="carousel__image" />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-pagination" style={{
              marginTop: '20px',
              position: 'relative'
            }}></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default About;
