"use client";
import Translator from "./Translator";
import Link from "next/link";
import Image from "next/image";
import { poppins, titillium } from "./MainScreen";
import SkailiFooterLogo from "../assets/FooterLogo.png";
import "./components.css";

function Footer() {
  return (
    <Translator>
      {(translations) => (
        <section className="footer__section">
          <div className="footer__main__div">
            <div className="footer__top__div">
              <div className="footer__title__div">
                <h2 className={`footer__main__title ${poppins.className}`}>
                  DISCOVER NEW LIMITS FOR YOUR BUSINESS
                </h2>
                <a className="footer__title__circle" href="#main__screen">
                  <svg
                  className="footer__circle__svg"
                    width="30"
                    height="42"
                    viewBox="0 0 30 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8101 1.67747L15.5485 1.00309L14.8101 0.194637L14.0717 1.00309L14.8101 1.67747ZM29.0485 15.7842L15.5485 1.00309L14.0717 2.35185L27.5717 17.133L29.0485 15.7842ZM14.0717 1.00309L0.571739 15.7842L2.0485 17.133L15.5485 2.35185L14.0717 1.00309ZM13.8101 1.67747L13.8101 41.0937L15.8101 41.0937L15.8101 1.67747L13.8101 1.67747Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <span className="footer__main__description">
                Skaili agency is a digitalitzation agency that offers
                profesional web solutions around the world. ¡All ready to do
                your business more scalable!
              </span>
              <div className="footer__buttons__div">
                <Link href={"/contact"} className="footer__contact__button">
                  Ask for a quote
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
                {/* <span className={`${titillium.className} footer__or__span`}>OR</span> */}
                <Link href={"/contact"} className="footer__planer__button">
                  Plan a project{" "}
                  <svg
                  className="footer__planner__svg"
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
            <div className="footer__middle__line" />
            <div className="footer__bottom__div">
              <Image src={SkailiFooterLogo} alt="Skaili logo" />
              <div className="footer__elements__div">
              <a className="footer__links__span" href="#services__section">
                  Home
                </a>
                <a className="footer__links__span" href="#services__section">
                  About us
                </a>
                <a className="footer__links__span" href="#services__section">
                  {translations.headerelement1}
                </a>
                <a href="#process__section" className="footer__links__span">
                  {translations.headerelement2}
                </a>
                <a className="footer__links__span" href="#questions__section">
                  {translations.headerelement3}
                </a>
              </div>
              <div className="footer__email__div">
                <span className="footer__email__intro">
                  Don't like our forms? Email us:
                </span>
                <div className="footer__email__span">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                      fill="#0E0E2C"
                    />
                  </svg>
                  <span>info.skaili@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__rights__div"><span className="footer__rights__span">© 2024 Skaili all rights reserved.</span></div>
        </section>
      )}
    </Translator>
  );
}

export default Footer;
