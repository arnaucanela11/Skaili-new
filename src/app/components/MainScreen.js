"use client";
import {
  Shanti,
  Raleway,
  Poppins,
  Titillium_Web,
  IBM_Plex_Mono,
} from "next/font/google";
export const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
export const shanti = Shanti({ subsets: ["latin"], weight: ["400"] });
export const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600"],
});
export const IBM = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});
import "./components.css";
import Link from "next/link";
import Translator from "./Translator";
import Script from "next/script";
import Header from "./Header";
import Typewriter from "./TypeWriter";

const words = ["WEBS", "DESIGNS", "SOLUTIONS"];

function MainScreen({children}) {


  return (
    <Translator>
      {(translations) => (
        <div className="main__page__main__div" id="main__screen">
          <div className="main__page__main__div__bg">
            <script
              type="module"
              src="https://unpkg.com/@splinetool/viewer@1.1.7/build/spline-viewer.js"
            ></script>
            <spline-viewer url="https://prod.spline.design/yxd7Ro5LO2T4ed11/scene.splinecode"></spline-viewer>
          </div>
          {children}
          <div className="main__screen__text__div">
            <span className={`main__screen__title ${titillium.className}`}>
              WE CREATE
              <div className="main__screen__title__second__line__div">
                <a
                  href="#services__section"
                  className="main__screen__title__circle"
                >
                  <svg
                    className="main__screen__circle__svg"
                    width="40"
                    height="62"
                    viewBox="0 0 29 41"
                    fill="none"
                    rotate="90deg"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 39L13.7652 39.6783L14.5 40.4743L15.2348 39.6783L14.5 39ZM0.265197 25.0533L13.7652 39.6783L15.2348 38.3217L1.7348 23.6967L0.265197 25.0533ZM15.2348 39.6783L28.7348 25.0533L27.2652 23.6967L13.7652 38.3217L15.2348 39.6783ZM15.5 39L15.5 -2.47589e-07L13.5 2.47589e-07L13.5 39L15.5 39Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <span
                  className={`main__screen__title__second__line__text ${IBM.className}`}
                >
                  THE BEST
                </span>
              </div>
              <Typewriter words={words} />
            </span>
            <div className="main__screen__line" />
            <div className="main__screen__bottom__div">
              <div className="important__policy__div">
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2167 0.65686V3.66198C18.635 3.92559 17.5279 4.47916 16.8952 5.32271C16.2626 6.16625 15.9462 7.66881 15.9462 9.83039H19.9794V17.3432H12.2294V11.0166C12.2294 7.74789 12.8357 5.21726 14.0483 3.42473C15.2609 1.57948 17.317 0.65686 20.2167 0.65686ZM8.82885 0.65686V3.66198C7.24721 3.92559 6.14006 4.47916 5.5074 5.32271C4.87474 6.16625 4.55841 7.66881 4.55841 9.83039H8.5916V17.3432H0.841553L0.841553 11.0166C0.841553 7.74789 1.44785 5.21726 2.66044 3.42473C3.87304 1.57948 5.92917 0.65686 8.82885 0.65686Z"
                    fill="#0E0E2C"
                    fill-opacity="0.78"
                  />
                </svg>

                <span className="main__screen__important__policy">
                  Si no está satisfecho con el resultado, puede cancelar sin
                  costo.
                </span>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.216671 17.3431V14.338C1.79831 14.0744 2.90546 13.5208 3.53812 12.6773C4.17078 11.8338 4.48711 10.3312 4.48711 8.16961L0.45392 8.16961L0.45392 0.656808L8.20397 0.656808L8.20397 6.98338C8.20397 10.2521 7.59767 12.7827 6.38508 14.5753C5.17248 16.4205 3.11635 17.3431 0.216671 17.3431ZM11.6045 17.3431L11.6045 14.338C13.1861 14.0744 14.2933 13.5208 14.9259 12.6773C15.5586 11.8338 15.8749 10.3312 15.8749 8.16961L11.8417 8.16961L11.8417 0.656808L19.5918 0.656808L19.5918 6.98338C19.5918 10.2521 18.9855 12.7827 17.7729 14.5753C16.5603 16.4205 14.5042 17.3431 11.6045 17.3431Z"
                    fill="#0E0E2C"
                    fill-opacity="0.78"
                  />
                </svg>
              </div>
              <div className="main__screen__buttons__div">
                <Link
                  href={"/contact"}
                  className="main__screen__contact__button"
                >
                  Contact now
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_391_947)">
                      <path
                        d="M24.4506 6.87055C24.9726 5.42659 23.5734 4.02734 22.1294 4.55055L4.48172 10.933C3.03293 11.4574 2.85772 13.4342 4.19051 14.2063L9.82376 17.4676L14.854 12.4373C15.0819 12.2172 15.3872 12.0954 15.704 12.0982C16.0208 12.1009 16.3239 12.228 16.5479 12.4521C16.7719 12.6761 16.899 12.9792 16.9018 13.296C16.9045 13.6128 16.7827 13.918 16.5626 14.1459L11.5323 19.1762L14.7948 24.8095C15.5658 26.1423 17.5426 25.9658 18.067 24.5183L24.4506 6.87055Z"
                        fill="#0E0E2C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_391_947">
                        <rect width="27" height="27" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <span className={`main__screen__or ${titillium.className}`}>
                  OR
                </span>
                <Link
                  href={"/contact"}
                  className="main__screen__planer__button"
                >
                  <span>Plan a project</span>
                  <svg
                    className="main__screen__planner__svg"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 5V0M8.75 22.5H6.25M23.75 22.5H11.25M8.75 17.5H6.25M23.75 17.5H11.25M7.5 5V0M1.25 11.25H28.75M1.25 28.75H28.75V5H1.25V28.75Z"
                      stroke="#0E0E2C"
                      stroke-width="2"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Translator>
  );
}

export default MainScreen;
