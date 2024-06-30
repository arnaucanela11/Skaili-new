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
import AboutPointsSmall from "../assets/AboutPointsSmall.png";
import AboutCirclesSmall from "../assets/AboutCirclesSmall.png";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Translator from "./Translator";

function About() {
  return (
    <Translator> 
      {(translations) => (
    <section className="about__main__section" id="about__section">
      <span className={`about__section__name ${poppins.className}`}>
        {translations.aboutsectionname}
      </span>
      <div className="about__main__text__div">
        <h2 className={`about__main__text ${poppins.className}`} dangerouslySetInnerHTML={{__html: translations.abouttext1}}>
          
        </h2>
        <h2 className={`about__main__text__small ${poppins.className}`} dangerouslySetInnerHTML={{__html: translations.abouttext1small}}>
        </h2>
        <span className={`about__main__description ${poppins.className}`}>
          {translations.abouttext2}
        </span>
      </div>
      <Image
        src={PointPattern1}
        alt="point__pattern"
        className="about__point__pattern"
      />
      <div className="container carousel__container">
        {/* <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={3}
      spaceBetween={50} // Espacio entre diapositivas
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
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
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="carousel__image"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="carousel__image"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="carousel__image"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="carousel__image"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="carousel__image"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="carousel__image"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" className="carousel__image"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" className="carousel__image"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" className="carousel__image"/>
      </SwiperSlide>
      <div className="slider-controler">
        <div className="swiper-pagination" style={{
          marginTop: '20px',
          position: 'relative'
        }}></div>
      </div>
    </Swiper> */}
    <Image src={AboutPointsSmall} alt="small__devices__points" className="about__points__small"/>
    <Image src={AboutCirclesSmall} alt="small__devices__points" className="about__circles__small"/>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          spaceBetween={10} // Ajustar para el efecto deseado
          autoplay={{
            delay: 0, // Sin retraso para un desplazamiento continuo
            disableOnInteraction: false, // Continuar auto-play incluso cuando el usuario interactúa
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0, // Ajusta el efecto de "stretch" para evitar separación
            depth: 100,
            modifier: 2.5,
            slideShadows: false, // Desactiva las sombras de las diapositivas
          }}
          speed={2000} // Ajusta la velocidad del desplazamiento automático
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".my-custom-next",
            prevEl: ".my-custom-prev",
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          className="swiper_container"
        >
          <SwiperSlide>
            <Image
              src={Carousel1}
              alt="slide_image"
              className="carousel__image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Carousel5}
              alt="slide_image"
              className="carousel__image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Carousel4}
              alt="slide_image"
              className="carousel__image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Carousel2}
              alt="slide_image"
              className="carousel__image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Carousel3}
              alt="slide_image"
              className="carousel__image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Carousel6}
              alt="slide_image"
              className="carousel__image"
            />
          </SwiperSlide>
          <div className="slider-controler">
            <div
              className="swiper-pagination"
              style={{
                marginTop: "20px",
                position: "relative",
              }}
            ></div>
          </div>
        </Swiper>
      </div>
    </section>
    )}
    </Translator>
  );
}

export default About;
