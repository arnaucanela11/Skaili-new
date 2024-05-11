"use client";
import Image from "next/image";
import { shanti, poppins } from "./MainScreen";
import Translator from "./Translator";
import Rocket from "../assets/RocketServices.png";
import PCServices from "../assets/PCServices.png";
import HandServices from "../assets/HandServices.png";

const services1 = [
  "Build by a profesional developer",
  "Build with moder web code tools (Next.js, Astro...)",
  "Scalabel and responsive structure",
  "SEO friendly",
  "We can adapt to complementary needs (as Data Bases, Back-end...)",
  "Fast loading",
  "Domain and hosting management and SSL certificate",
  "Almost unlimited possibilities for your website",
];

const services2 = [
  "Build by a profesional developer",
  "Build with a CSM (like Wordpress)",
  "Scalabel and responsive structure",
  "SEO friendly",
  "Cheaper service (no-code tools are less complex and faster)",
  "Fast loading",
  "Domain and hosting management and SSL certificate",
];

const services3 = [
  "Made by a profesional disaigner",
  "Full responsive",
  "Following your personal needs",
  "Maninly made with Figma",
  "Possibility of use 3D tools like Spline",
];

function Services() {
  return (
    <Translator>
      {(translations) => (
        <section className="services__section" id="services__section">
          <div className="services__main__div">
            <span className="services__section__name">OUR SERVICES</span>
            <div className="services_main__text__div">
              <span className="services__main__text">
                What we can offer to you?
              </span>
            </div>
            <div className="services__targets__div__flex">
              <div className="services__targets__div">
                <div className="services__target__1">
                  <Image
                    className="services__rocket__image"
                    src={Rocket}
                  ></Image>
                  <div className="services__target__titles__div">
                    <span className="services__target__subtitle">
                      Web Development
                    </span>
                    <h2 className="services__target__title">
                      Web Development
                      (code tools) <span className="text-[#3B71FE]">.</span>
                    </h2>
                  </div>
                  <ul className="services__target__ul">
                    {services1.map((text, index) => (
                      <li className="services__target__li">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_255_1815)">
                            <path
                              d="M4.91553 7.54861L7.91553 10.0486L11.9155 5.04861M8.41553 14.5486C7.49627 14.5486 6.58602 14.3676 5.73674 14.0158C4.88746 13.664 4.11579 13.1484 3.46578 12.4984C2.81577 11.8484 2.30015 11.0767 1.94837 10.2274C1.59659 9.37812 1.41553 8.46787 1.41553 7.54861C1.41553 6.62936 1.59659 5.71911 1.94837 4.86983C2.30015 4.02055 2.81577 3.24888 3.46578 2.59887C4.11579 1.94886 4.88746 1.43324 5.73674 1.08146C6.58602 0.729675 7.49627 0.548614 8.41553 0.548615C10.272 0.548615 12.0525 1.28611 13.3653 2.59887C14.678 3.91162 15.4155 5.6921 15.4155 7.54861C15.4155 9.40513 14.678 11.1856 13.3653 12.4984C12.0525 13.8111 10.272 14.5486 8.41553 14.5486Z"
                              stroke="#0FA958"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_255_1815">
                              <rect
                                width="15"
                                height="15"
                                fill="white"
                                transform="translate(0.915527 0.0486145)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="services__target__span">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="services__ideal__span">
                    Ideal for <span className="text-[#1F3C88]">mid/high</span>{" "}
                    complex websites
                  </span>
                  <div className="services__averages__div">
                    <div className="services__average__price">
                      Average price: <span className="font-semibold">350€</span>
                    </div>
                    <div className="services__average__time">
                      Average time:{" "}
                      <span className="font-semibold">11 days</span>
                    </div>
                  </div>
                </div>
                <div className="services__target__2">
                  <Image
                    className="services__PC__image"
                    src={PCServices}
                  ></Image>
                  <div className="services__target__titles__div">
                    <span className="services__target__subtitle">
                      Web Development
                    </span>
                    <h2 className="services__target__title">
                      Web Development With 
                      CSM (<span className="underline">
                        no code
                      </span> tools) <span className="text-[#3B71FE]">.</span>
                    </h2>
                  </div>
                  <ul className="services__target__ul">
                    {services2.map((text, index) => (
                      <li className="services__target__li">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_255_1815)">
                            <path
                              d="M4.91553 7.54861L7.91553 10.0486L11.9155 5.04861M8.41553 14.5486C7.49627 14.5486 6.58602 14.3676 5.73674 14.0158C4.88746 13.664 4.11579 13.1484 3.46578 12.4984C2.81577 11.8484 2.30015 11.0767 1.94837 10.2274C1.59659 9.37812 1.41553 8.46787 1.41553 7.54861C1.41553 6.62936 1.59659 5.71911 1.94837 4.86983C2.30015 4.02055 2.81577 3.24888 3.46578 2.59887C4.11579 1.94886 4.88746 1.43324 5.73674 1.08146C6.58602 0.729675 7.49627 0.548614 8.41553 0.548615C10.272 0.548615 12.0525 1.28611 13.3653 2.59887C14.678 3.91162 15.4155 5.6921 15.4155 7.54861C15.4155 9.40513 14.678 11.1856 13.3653 12.4984C12.0525 13.8111 10.272 14.5486 8.41553 14.5486Z"
                              stroke="#0FA958"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_255_1815">
                              <rect
                                width="15"
                                height="15"
                                fill="white"
                                transform="translate(0.915527 0.0486145)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="services__target__span">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="services__ideal__span">
                    Ideal for <span className="text-[#1F3C88]">low</span>{" "}
                    complex websites
                  </span>
                  <div className="services__averages__div">
                    <div className="services__average__price">
                      Average price: <span className="font-semibold">200€</span>
                    </div>
                    <div className="services__average__time">
                      Average time:{" "}
                      <span className="font-semibold">8 days</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services__target__3">
                <Image
                  className="services__hand__image"
                  src={HandServices}
                ></Image>
                <div className="services__target__titles__div">
                  <span className="services__target__subtitle">Web Design</span>
                  <h2 className="services__target__title">
                    Website
                    Design <span className="text-[#3B71FE]">.</span>
                  </h2>
                </div>
                <span className="services__design__description">
                  Web Development services normally include a web design
                  service, but{" "}
                  <b>you can contract only the website design service</b> as
                  well.
                </span>
                <ul className="services__target__ul">
                  {services3.map((text, index) => (
                    <li className="services__target__li">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_255_1815)">
                          <path
                            d="M4.91553 7.54861L7.91553 10.0486L11.9155 5.04861M8.41553 14.5486C7.49627 14.5486 6.58602 14.3676 5.73674 14.0158C4.88746 13.664 4.11579 13.1484 3.46578 12.4984C2.81577 11.8484 2.30015 11.0767 1.94837 10.2274C1.59659 9.37812 1.41553 8.46787 1.41553 7.54861C1.41553 6.62936 1.59659 5.71911 1.94837 4.86983C2.30015 4.02055 2.81577 3.24888 3.46578 2.59887C4.11579 1.94886 4.88746 1.43324 5.73674 1.08146C6.58602 0.729675 7.49627 0.548614 8.41553 0.548615C10.272 0.548615 12.0525 1.28611 13.3653 2.59887C14.678 3.91162 15.4155 5.6921 15.4155 7.54861C15.4155 9.40513 14.678 11.1856 13.3653 12.4984C12.0525 13.8111 10.272 14.5486 8.41553 14.5486Z"
                            stroke="#0FA958"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_255_1815">
                            <rect
                              width="15"
                              height="15"
                              fill="white"
                              transform="translate(0.915527 0.0486145)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="services__target__span">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="services__averages__div mt-2">
                  <div className="services__average__price">
                    Average price: <span className="font-semibold">100€</span>
                  </div>
                  <div className="services__average__time">
                    Average time: <span className="font-semibold">4 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Translator>
  );
}

export default Services;
