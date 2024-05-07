"use client";
import Image from "next/image";
import AngelyLogo from "../assets/SkailiLogo.png";
import Link from "next/link";
import "./data_protection.css";
import { shanti } from "../components/MainScreen.js";
import Translator from "../components/Translator";

function page() {
  return (
    <Translator>
      {(translations) => (
        <main className="w-100vw h-[100vh] overflow-x-hidden overflow-y-scroll relative">
          <section className="header__section">
            <Link href={"/"}>
              <Image alt="logo" src={AngelyLogo} className="Skaili__logo" />
            </Link>
            <div className="flex flex-row gap-10 justify-center items-center">
              <Link href="/contact" className="header__contact__button">
                {translations.contactbutton}
              </Link>
            </div>
          </section>
          <section className="data__protection__section">
            <div className="w-[90%] flex flex-col items-center gap-2 justify-center">
              <span className={`data__protection__title ${shanti.className}`}>
              {translations.datatitle}
              </span>
              <div className="w-[100%] h-[1px] bg-white" />
            </div>
            <div className="data__protection__content__div">
              <div className="data__protection__purpose__div">
                <span className="purpose__span">{translations.datasubtitle1}</span>
                <div className="ml-8 mt-4">
                  <span className="purpose__text__span">
                  {translations.purposespan1}
                  </span>
                  <ul className="purpose__text__ul">
                    <li>
                    {translations.purposeli1}
                    </li>
                    <li>
                    {translations.purposeli2}
                    </li>{" "}
                    <li>
                      {translations.purposeli3}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="data__protection__purpose__div">
                <span className="purpose__span">{translations.datasubtitle2}</span>
                <div className="ml-8 mt-4">
                  <span className="purpose__text__span">
                  {translations.legitimationspan1}
                  </span>
                  <ul className="purpose__text__ul">
                    <li>
                    {translations.legitimationli1}
                    </li>
                    <li>{translations.legitimationli2}</li>{" "}
                  </ul>
                  <span className="legitimation__text__span__1">
                  {translations.legitimationspan2}
                  </span>
                </div>
              </div>
              <div className="data__protection__purpose__div">
                <span className="purpose__span">{translations.datasubtitle3}</span>
                <div className="ml-8 mt-4 flex flex-col gap-4">
                  <span className="purpose__text__span">
                  {translations.recipientspan1}
                  </span>
                  <ul className="recipients__text__ul">
                    <li>{translations.recipientli1}</li>
                  </ul>
                  <span className="purpose__text__span">
                  {translations.recipientspan2}
                  </span>
                  <span className="purpose__text__span">
                  {translations.recipientspan3}
                  </span>
                </div>
              </div>
              <div className="data__protection__purpose__div">
                <span className="purpose__span">{translations.datasubtitle4}</span>
                <div className="ml-8 mt-4 flex flex-col gap-4">
                  <span className="purpose__text__span">
                  {translations.rightsli1}
                  </span>
                  <span className="purpose__text__span">
                  {translations.rightsli2}
                  </span>
                  <span className="purpose__text__span">
                  {translations.rightsli3}
                  </span>
                  <span className="purpose__text__span">
                  {translations.rightsli4}
                  </span>
                  <span className="purpose__text__span">
                  {translations.rightsli5}
                  </span>
                </div>
              </div>
              <div className="data__protection__purpose__div">
                <span className="purpose__span">
                {translations.datasubtitle5}
                </span>
                <div className="ml-8 mt-4 flex flex-col gap-4">
                  <span className="purpose__text__span">
                  {translations.periodspan1}
                  </span>
                </div>
              </div>
              <div className="data__protection__purpose__div">
                <span className="purpose__span">{translations.responsiblesubtitle}</span>
                <div className="ml-8 mt-4 flex flex-col gap-4 mb-12">
                  <span className="purpose__text__span">
                  {translations.responsiblespan1}
                  </span>
                  <span className="purpose__text__span">
                  {translations.responsiblespan2}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </Translator>
  );
}

export default page;
