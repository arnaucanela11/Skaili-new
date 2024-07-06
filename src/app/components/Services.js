"use client";
import Image from "next/image";
import { shanti, poppins } from "./MainScreen";
import Translator from "./Translator";
import Rocket from "../assets/RocketServices.png";
import PCServices from "../assets/PCServices.png";
import HandServices from "../assets/HandServices.png";
import useTranslation from "../hooks/useTranslation";

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
  const translations = useTranslation();

  const translatedServices1 = [
    translations.buildByProfessionalDeveloper,
    translations.buildWithModernWebTools,
    translations.scalableAndResponsive,
    translations.seoFriendly,
    translations.adaptToComplementaryNeeds,
    translations.domainAndHostingManagement,
    translations.unlimitedPossibilities,
  ];

  const translatedServices2 = [
    translations.buildByProfessionalDeveloper,
    translations.buildWithCSM,
    translations.scalableAndResponsive,
    translations.seoFriendly,
    translations.cheaperService,
    translations.domainAndHostingManagement,
  ];

  const translatedServices3 = [
    translations.madeByProfessionalDesigner,
    translations.fullResponsive,
    translations.followingPersonalNeeds,
    translations.mainlyWithFigma,
    translations.possibilityOf3DTools,
  ];
  return (
    <Translator>
      {(translations) => (
        <section className="services__section" id="services__section">
          <div className="services__main__div">
            <span className="services__section__name">
              {translations.servicessectionname}
            </span>
            <div className="services_main__text__div">
              <span className="services__main__text">
                {translations.servicesmaintext}
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
                      {translations.targetsubtitle1}
                    </span>
                    <h2 className="services__target__title" dangerouslySetInnerHTML={{__html: translations.targettitle1}}>
                    </h2>
                  </div>
                  <ul className="services__target__ul__a">
                    {translatedServices1.map((text, index) => (
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
                        <span className="services__target__span" dangerouslySetInnerHTML={{__html: text}}></span>
                      </li>
                    ))}
                  </ul>
                  <span className="services__ideal__span" dangerouslySetInnerHTML={{__html: translations.idealspan1}}>
                    
                  </span>
                  <div className="services__averages__div">
                    <div className="services__average__price">
                    {translations.averageprice} <span className="font-semibold">350€</span>
                    </div>
                    <div className="services__average__time">
                      {translations.averageduration}
                      <span className="font-semibold">{translations.duration1}</span>
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
                      {" "}
                      {translations.targetsubtitle1}
                    </span>
                    <h2 className="services__target__title" dangerouslySetInnerHTML={{__html: translations.targettitle2}}>
                    </h2>
                  </div>
                  <ul className="services__target__ul">
                    {translatedServices2.map((text, index) => (
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
                        <span className="services__target__span" dangerouslySetInnerHTML={{__html: text}}></span>
                      </li>
                    ))}
                  </ul>
                  <span className="services__ideal__span" dangerouslySetInnerHTML={{__html: translations.idealspan2}}>
                    
                  </span>
                  <div className="services__averages__div">
                    <div className="services__average__price">
                    {translations.averageprice} <span className="font-semibold">200€</span>
                    </div>
                    <div className="services__average__time">
                    {translations.averageduration}
                      <span className="font-semibold">{translations.duration2}</span>
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
                  <span className="services__target__subtitle">{translations.targetsubtitle2}</span>
                  <h2 className="services__target__title">
                    {translations.targettitle3} <span className="text-[#3B71FE]">.</span>
                  </h2>
                </div>
                <span className="services__design__description" dangerouslySetInnerHTML={{__html: translations.designdescription}}>
                </span>
                <ul className="services__target__ul">
                  {translatedServices3.map((text, index) => (
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
                    {translations.averageprice} <span className="font-semibold">100€</span>
                  </div>
                  <div className="services__average__time">
                  {translations.averageduration} <span className="font-semibold">{translations.duration3}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="services__alert__div">
            <svg className="services__alert__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_478_946)">
<path d="M13.2989 3.14801L21.9329 18.102C22.0646 18.33 22.1339 18.5887 22.1339 18.852C22.1339 19.1153 22.0646 19.374 21.9329 19.602C21.8013 19.83 21.6119 20.0194 21.3839 20.151C21.1559 20.2827 20.8972 20.352 20.6339 20.352H3.36593C3.10263 20.352 2.84397 20.2827 2.61594 20.151C2.38792 20.0194 2.19857 19.83 2.06692 19.602C1.93527 19.374 1.86597 19.1153 1.86597 18.852C1.86597 18.5887 1.93528 18.33 2.06693 18.102L10.7009 3.14801C11.2779 2.14801 12.7209 2.14801 13.2989 3.14801ZM11.9999 15C11.7347 15 11.4804 15.1054 11.2928 15.2929C11.1053 15.4804 10.9999 15.7348 10.9999 16C10.9999 16.2652 11.1053 16.5196 11.2928 16.7071C11.4804 16.8947 11.7347 17 11.9999 17C12.2651 17 12.5195 16.8947 12.707 16.7071C12.8946 16.5196 12.9999 16.2652 12.9999 16C12.9999 15.7348 12.8946 15.4804 12.707 15.2929C12.5195 15.1054 12.2651 15 11.9999 15ZM11.9999 8.00001C11.755 8.00004 11.5186 8.08997 11.3356 8.25273C11.1525 8.41548 11.0356 8.63976 11.0069 8.88301L10.9999 9.00001V13C11.0002 13.2549 11.0978 13.5 11.2728 13.6854C11.4477 13.8707 11.6869 13.9822 11.9413 13.9972C12.1958 14.0121 12.4463 13.9293 12.6418 13.7657C12.8372 13.6022 12.9628 13.3701 12.9929 13.117L12.9999 13V9.00001C12.9999 8.73479 12.8946 8.48044 12.707 8.2929C12.5195 8.10537 12.2651 8.00001 11.9999 8.00001Z" fill="white" fill-opacity="0.8"/>
</g>
<defs>
<clipPath id="clip0_478_946">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
            <span className={`services__alert__span ${poppins.className}`}>{translations.servicesalertspan}</span>
            {/* <svg className="services__alert__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_478_946)">
<path d="M13.2989 3.14801L21.9329 18.102C22.0646 18.33 22.1339 18.5887 22.1339 18.852C22.1339 19.1153 22.0646 19.374 21.9329 19.602C21.8013 19.83 21.6119 20.0194 21.3839 20.151C21.1559 20.2827 20.8972 20.352 20.6339 20.352H3.36593C3.10263 20.352 2.84397 20.2827 2.61594 20.151C2.38792 20.0194 2.19857 19.83 2.06692 19.602C1.93527 19.374 1.86597 19.1153 1.86597 18.852C1.86597 18.5887 1.93528 18.33 2.06693 18.102L10.7009 3.14801C11.2779 2.14801 12.7209 2.14801 13.2989 3.14801ZM11.9999 15C11.7347 15 11.4804 15.1054 11.2928 15.2929C11.1053 15.4804 10.9999 15.7348 10.9999 16C10.9999 16.2652 11.1053 16.5196 11.2928 16.7071C11.4804 16.8947 11.7347 17 11.9999 17C12.2651 17 12.5195 16.8947 12.707 16.7071C12.8946 16.5196 12.9999 16.2652 12.9999 16C12.9999 15.7348 12.8946 15.4804 12.707 15.2929C12.5195 15.1054 12.2651 15 11.9999 15ZM11.9999 8.00001C11.755 8.00004 11.5186 8.08997 11.3356 8.25273C11.1525 8.41548 11.0356 8.63976 11.0069 8.88301L10.9999 9.00001V13C11.0002 13.2549 11.0978 13.5 11.2728 13.6854C11.4477 13.8707 11.6869 13.9822 11.9413 13.9972C12.1958 14.0121 12.4463 13.9293 12.6418 13.7657C12.8372 13.6022 12.9628 13.3701 12.9929 13.117L12.9999 13V9.00001C12.9999 8.73479 12.8946 8.48044 12.707 8.2929C12.5195 8.10537 12.2651 8.00001 11.9999 8.00001Z" fill="white" fill-opacity="0.8"/>
</g>
<defs>
<clipPath id="clip0_478_946">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg> */}
            </div>
          </div>
        </section>
      )}
    </Translator>
  );
}

export default Services;
