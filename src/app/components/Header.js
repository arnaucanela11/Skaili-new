"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AngelyLogo from "../assets/SkailiLogo.png";
import "./components.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Translator from "./Translator";


function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [header, setHeader] = useState(false)

  const scrollHeader = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 20) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.addEventListener('scroll', scrollHeader)
    }
  }, [])

  return (
    <Translator>
      {(translations) => (
        <section className={header ? 'header__section__scroll bg-black' : 'header__section'}>
          <Image alt="logo" src={AngelyLogo} className="Skaili__logo" />
          <div className="header__elements__div">
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
            <Link className="footer__links__span" href="/contact">
              {translations.contactbutton}
            </Link>
          </div>
          <Link href="/contact" className="header__contact__button">
            Project Planner
            <svg
              className="header__contact__svg"
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
          <button className="header__nav__toggle-button">
            <input
              type="checkbox"
              id="checkbox"
              value={toggleMenu}
              onClick={() => setToggleMenu((prev) => !prev)}
            />
            <label for="checkbox" class="toggle">
              <div class="bars" id="bar1"></div>
              <div class="bars" id="bar2"></div>
              <div class="bars" id="bar3"></div>
            </label>
          </button>
          {toggleMenu ? (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="header__toggle__menu__div"
            >
              <div>
                <a href="#services__section">{translations.headerelement1}</a>
                <a href="#process__section">{translations.headerelement2}</a>
                <a href="#questions__section">{translations.headerelement3}</a>
                <Link href={"/contact"} className="header__toggle__menu__login">
                  {translations.contactbutton}
                </Link>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </section>
      )}
    </Translator>
  );
}

export default Header;
