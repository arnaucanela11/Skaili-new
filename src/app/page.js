"use client";
import Image from "next/image";
import Header from "./components/Header";
import "./main.css";
import Link from "next/link";
import CarruselImage1 from "./assets/Carrusel_image_1.png";
import CarruselImage2 from "./assets/Carrusel_image_2.png";
import CarruselImage3 from "./assets/Carrusel_image_3.jpg";
import CarruselImage4 from "./assets/Carrusel_image_4.png";
import CarruselImage5 from "./assets/Carrusel_image_5.png";
import CarruselImage6 from "./assets/Carrusel_image_6.png";
import CarruselImage7 from "./assets/Carrusel_image_7.png";
import AngelyLogo from "./assets/SkailiLogo.png";
import Questions from "./components/Questions";
import Carousel from "./components/Carrusel";
import MainScreen from "./components/MainScreen";
import Services from "./components/Services";
import Process from "./components/Process";
import SkailiFooterLogo from "./assets/FooterLogo.png";
import TechWrapper from "./components/TechWrapper";
import About from "./components/About";
import BottomCarousel from "./components/BottomCarousel";
import { useEffect, useRef, useState } from "react";
import Translator from "./components/Translator";
import { useScroll } from "react-use";
import { motion } from "framer-motion";
import ProcessAnimation1 from "./assets/ProcessImage1.png";
import ProcessAnimation2 from "./assets/ProcessImage2.png";
import ProcessAnimation3 from "./assets/ProcessImage3.png";
import ProcessAnimation4 from "./assets/ProcessImage4.png";
import ProcessPoints from "./assets/ProcessPoints.png";
import QuestionsPoints from "./assets/QuestionsPoints.png";
import { useInView } from "react-intersection-observer";

import {
  Shanti,
  Raleway,
  Poppins,
  Titillium_Web,
  IBM_Plex_Mono,
  Be_Vietnam_Pro,
} from "next/font/google";
export const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
export const shanti = Shanti({ subsets: ["latin"], weight: ["400"] });
export const be_vietnam_pro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});
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
import "./components/components.css";
import Typewriter from "./components/TypeWriter";
import { ErrorMessage, Field, Formik } from "formik";
import * as yup from "yup";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import useTranslation from "./hooks/useTranslation";
import CookieConsent from "./components/CookieConsent";


const images = [
  CarruselImage1,
  CarruselImage2,
  CarruselImage3,
  CarruselImage4,
  CarruselImage5,
  CarruselImage6,
  CarruselImage7,
];

const loginSchema = yup.object().shape({
  name: yup.string().required("required"),
  company: yup.string(),
  email: yup
    .string()
    .email("the email format is not correct")
    .required("required"),
  message: yup.string().required("required"),
  acceptPolicy: yup
    .boolean()
    .oneOf([true], "You have to accepts the privacy policy."),
});

const initailaState = {
  name: "",
  email: "",
  company: "",
  message: "",
  acceptPolicy: false,
};

const sendMessage = async (values) => {
  try {
    const resp = await fetch(
      // "https://skailee-09041f34dfef.herokuapp.com/api/mail/register",
      "https://om3ziwo23m.execute-api.eu-west-3.amazonaws.com/SendEmail",
      {
        mode: "no-cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    const resp2 = await resp.json();
    return resp2;
  } catch (error) {
    return error;
  }
};

const processSteps = [
  {
    number: "01",
    title: "Get In Touch",
    description:
      "The first step in the process is to <strong>get in touch</strong>. For that, we offer both our contact form (to explain the idea you have in mind or ask any question) and our project planner (if you have a clearer idea of your project). <br />We let's responde you the faster we can, explaining all the details (<u>including the budget</u>).",
    description__small:
      "The first step in the process is to <strong>get in touch</strong>. <br />We let's responde you the faster we can, explaining all the details (<u>including the budget</u>).",
    image: ProcessAnimation1,
  },
  {
    number: "02",
    title: "Start Working",
    description:
      "If you agree with the budget, estimated time, and all the other details, we will can start working on your project. Most times you will have <b>two persons (one designer and one developer)</b> working on your project. <br/>During the process stay in touch to ensure that we create the project you had in your mind.",
    description__small:
      "Once you agree the details we will start working on your project. Most times you will have <b>one developer and one designer</b> working on your project.",
    image: ProcessAnimation2,
  },
  {
    number: "03",
    title: "Work Delivering",
    description:
      "Finally, it will be time to deliver the final product. If you like the product, <b>we will consider the project completed</b>. On the other hand, if you're not satisfied, we can make the necessary adjustments (<u>at no extra cost</u>), or <b>cancel the contract</b> if the delivered product is significantly different from the one initially requested (in this case, <u>no fees will be charged for the services provided</u>).",
    description__small:
      "If you like the product, <u>the project is complete</u>. If not, <b>we can adjust it for free</b> or <b>cancel the contract</b> if it significantly differs from the request, <b>with no fees charged</b>.",
    image: ProcessAnimation3,
  },
  {
    number: "04",
    title: "Maintenance",
    description:
      "Even though we have declared the project completed, this <u>does not mean</u> that the contract between Skaili Agency (as a web service provider) and you has ended. Therefore, we can handle both <b>the maintenance of your website and the correction of any minor errors that may arise in the future</b>.",
    description__small:
      "The contract with Skaili Agency doesn’t has to end once the product is delivered. We can handle website maintenance and correct any minor errors that may arise in the future",
    image: ProcessAnimation4,
  },
];

const Step = ({ step, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const translations = useTranslation();

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "linear" },
    },
  };

  return (
    <div key={index} className="process__main__target__div">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="process__step__div"
      >
        <div
          className={`process__step__div__before ${inView ? "animate" : ""}`}
        />
        <div
          className={`process__step__div__after ${inView ? "animate" : ""}`}
        />
        <div className="process__step__header__small">
          <div className={`step__number__small ${be_vietnam_pro.className}`}>
            {step.number}
          </div>
          <div className="process__step__text__div">
            <h3 className="process__step__title">
              {translations[step.title]}{" "}
              <span className="text-[#3B71FE]">.</span>
            </h3>
            <span
              className={`process__step__description ${poppins.className}`}
              dangerouslySetInnerHTML={{
                __html: translations[step.description],
              }}
            />
            <span
              className={`process__step__description__small ${poppins.className}`}
              dangerouslySetInnerHTML={{ __html: translations[step.description__small] }}
            />
          </div>
        </div>
        <Image
          src={step.image}
          alt="illustration"
          className="step__illustration"
        />
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [contactForm, setContactForm] = useState(false);
  const [question, setQuestion] = useState("1");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollRef = useRef(null);
  const { x, y } = useScroll(scrollRef);

  const [currentStep, setCurrentStep] = useState(processSteps[0].number);
  const stepRefs = useRef([]);
  const containerRef = useRef(null);

  const [words, setWords] = useState(["WEBS", "DESIGNS", "SOLUTIONS"])

  useEffect(() => {
    const browserLanguage = navigator.language.split('-')[0];
    const selectedWords = browserLanguage === 'es' ? ["WEBS", "SOLUCIONES", "DISEÑOS"] : ["WEBS", "DESIGNS", "SOLUTIONS"];
    setWords(selectedWords);
  }, []);


  useEffect(() => {
    if (y <= 4000) {
      setCurrentStep(processSteps[0].number);
    }
    if (y > 4000 && y <= 4300) {
      setCurrentStep(processSteps[1].number);
    } else if (y > 4300 && y <= 4600) {
      setCurrentStep(processSteps[2].number);
    } else if (y > 4700 && y <= 5900) {
      setCurrentStep(processSteps[3].number);
    }
  }, [y]);

  useEffect(() => {
    if (y >= 2) {
      if (y >= 1000) {
        setIsScrolled(3);
      } else {
        setIsScrolled(1);
      }
    } else {
      setIsScrolled(2);
    }
  }, [y]);

  const handleSubmitContact = async (values, { resetForm }) => {
    if (!values.company) {
      values.company = "a company";
    }
    await sendMessage(values);

    resetForm();
    setContactForm(false);
  };

  useEffect(() => {
    // Efecto para bloquear/desbloquear el scroll del cuerpo cuando el menú está visible
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleMenu]);

  return (
    <main
      className="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-scroll relative main__page"
      ref={scrollRef}
    >
      <Translator>
        {(translations) => (
          <>
              {/* <CookieConsent /> */}
            <div className="main__page__main__div" id="main__screen">
              
              <section
                className={
                  contactForm
                    ? "contact__form__section open"
                    : "contact__form__section"
                }
              >
                <div
                  className="contact__cristal__div"
                  onClick={() => {
                    setContactForm(false);
                  }}
                ></div>
                <div className="contact__main__div__big">
                  <button
                    className="contact__close__button"
                    onClick={() => {
                      setContactForm(false);
                    }}
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="25" cy="25" r="25" fill="#F2F2F2" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.0142 20.014C19.1431 19.8853 19.3178 19.813 19.5 19.813C19.6822 19.813 19.8569 19.8853 19.9858 20.014L30.9858 31.0141C31.0534 31.077 31.1076 31.1529 31.1451 31.2372C31.1827 31.3216 31.2029 31.4126 31.2045 31.5049C31.2062 31.5972 31.1892 31.6889 31.1546 31.7745C31.12 31.8601 31.0686 31.9379 31.0033 32.0032C30.938 32.0685 30.8602 32.1199 30.7746 32.1545C30.689 32.1891 30.5973 32.2061 30.505 32.2044C30.4127 32.2028 30.3217 32.1826 30.2373 32.145C30.153 32.1074 30.0771 32.0533 30.0142 31.9857L19.0142 20.9857C18.8854 20.8568 18.8131 20.6821 18.8131 20.4999C18.8131 20.3177 18.8854 20.143 19.0142 20.014Z"
                        fill="#0E0E2C"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M30.9858 20.014C31.1146 20.143 31.1869 20.3177 31.1869 20.4999C31.1869 20.6821 31.1146 20.8568 30.9858 20.9857L19.9858 31.9857C19.8555 32.1072 19.6831 32.1733 19.505 32.1701C19.3269 32.167 19.157 32.0948 19.031 31.9689C18.9051 31.8429 18.8329 31.673 18.8298 31.4949C18.8266 31.3168 18.8927 31.1444 19.0142 31.014L30.0142 20.014C30.1431 19.8853 30.3178 19.813 30.5 19.813C30.6822 19.813 30.8569 19.8853 30.9858 20.014Z"
                        fill="#0E0E2C"
                      />
                    </svg>
                  </button>
                  <div className="contact__main__div__1">
                    <div className="contact__main__div">
                      <h2
                        className={`contact__main__title ${poppins.className}`}
                        dangerouslySetInnerHTML={{__html: translations.contactformtitle}}
                      />
                      <h2
                        className={`contact__main__title__small ${poppins.className}`}
                        dangerouslySetInnerHTML={{__html: translations.contactformtitlesmall}}
                      />
                      <Formik
                        validationSchema={loginSchema}
                        initialValues={initailaState}
                        onSubmit={(values, submitProps) =>
                          handleSubmitContact(values, submitProps)
                        }
                      >
                        {({
                          values,
                          handleSubmit,
                          handleBlur,
                          handleChange,
                          setFieldValue,
                        }) => (
                          <form
                            className="contact__form__div"
                            onSubmit={handleSubmit}
                          >
                            <div className="name__fields__div">
                              {/* <label  className="field__label">Name*</label> */}
                              <div className="flex flex-col justify-start gap-3 w-[100%]">
                                <div className="tooltip-container">
                                  <ErrorMessage
                                    name="name"
                                    render={(msg) => (
                                      <>
                                        <span className="tooltip">
                                          {" "}
                                          <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g clip-path="url(#clip0_478_946)">
                                              <path
                                                d="M13.2991 3.14795L21.9331 18.1019C22.0647 18.33 22.134 18.5886 22.134 18.8519C22.134 19.1152 22.0647 19.3739 21.9331 19.6019C21.8014 19.83 21.6121 20.0193 21.384 20.151C21.156 20.2826 20.8974 20.3519 20.6341 20.3519H3.36605C3.10275 20.3519 2.84409 20.2826 2.61606 20.151C2.38804 20.0193 2.19869 19.83 2.06704 19.6019C1.93539 19.3739 1.86609 19.1152 1.86609 18.8519C1.86609 18.5886 1.9354 18.33 2.06705 18.1019L10.7011 3.14795C11.2781 2.14795 12.7211 2.14795 13.2991 3.14795ZM12.0001 14.9999C11.7348 14.9999 11.4805 15.1053 11.2929 15.2928C11.1054 15.4804 11.0001 15.7347 11.0001 15.9999C11.0001 16.2652 11.1054 16.5195 11.2929 16.7071C11.4805 16.8946 11.7348 16.9999 12.0001 16.9999C12.2653 16.9999 12.5196 16.8946 12.7072 16.7071C12.8947 16.5195 13.0001 16.2652 13.0001 15.9999C13.0001 15.7347 12.8947 15.4804 12.7072 15.2928C12.5196 15.1053 12.2653 14.9999 12.0001 14.9999ZM12.0001 7.99995C11.7551 7.99998 11.5187 8.08991 11.3357 8.25266C11.1526 8.41542 11.0357 8.6397 11.0071 8.88295L11.0001 8.99995V12.9999C11.0003 13.2548 11.0979 13.5 11.2729 13.6853C11.4479 13.8707 11.687 13.9822 11.9414 13.9971C12.1959 14.0121 12.4464 13.9293 12.6419 13.7657C12.8373 13.6021 12.9629 13.37 12.9931 13.1169L13.0001 12.9999V8.99995C13.0001 8.73473 12.8947 8.48038 12.7072 8.29284C12.5196 8.10531 12.2653 7.99995 12.0001 7.99995Z"
                                                fill="#F08929"
                                              />
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_478_946">
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  fill="white"
                                                />
                                              </clipPath>
                                            </defs>
                                          </svg>
                                          {msg}
                                        </span>
                                      </>
                                    )}
                                  />
                                  <Field
                                    name="name"
                                    type="text"
                                    className="name__field text"
                                    placeholder={`${translations.formplaceholder1}`}
                                  />
                                </div>
                              </div>
                              {/* <label className="field__label">Company (optional)</label> */}
                              <Field
                                name="company"
                                type="text"
                                className="name__field text"
                                placeholder={`${translations.formplaceholder3}`}
                              />
                            </div>
                            {/* <label className="field__label">Company (optional)</label> */}

                            <div className="tooltip-container">
                              <ErrorMessage
                                name="email"
                                render={(msg) => (
                                  <>
                                    <span className="tooltip">
                                      {" "}
                                      <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clip-path="url(#clip0_478_946)">
                                          <path
                                            d="M13.2991 3.14795L21.9331 18.1019C22.0647 18.33 22.134 18.5886 22.134 18.8519C22.134 19.1152 22.0647 19.3739 21.9331 19.6019C21.8014 19.83 21.6121 20.0193 21.384 20.151C21.156 20.2826 20.8974 20.3519 20.6341 20.3519H3.36605C3.10275 20.3519 2.84409 20.2826 2.61606 20.151C2.38804 20.0193 2.19869 19.83 2.06704 19.6019C1.93539 19.3739 1.86609 19.1152 1.86609 18.8519C1.86609 18.5886 1.9354 18.33 2.06705 18.1019L10.7011 3.14795C11.2781 2.14795 12.7211 2.14795 13.2991 3.14795ZM12.0001 14.9999C11.7348 14.9999 11.4805 15.1053 11.2929 15.2928C11.1054 15.4804 11.0001 15.7347 11.0001 15.9999C11.0001 16.2652 11.1054 16.5195 11.2929 16.7071C11.4805 16.8946 11.7348 16.9999 12.0001 16.9999C12.2653 16.9999 12.5196 16.8946 12.7072 16.7071C12.8947 16.5195 13.0001 16.2652 13.0001 15.9999C13.0001 15.7347 12.8947 15.4804 12.7072 15.2928C12.5196 15.1053 12.2653 14.9999 12.0001 14.9999ZM12.0001 7.99995C11.7551 7.99998 11.5187 8.08991 11.3357 8.25266C11.1526 8.41542 11.0357 8.6397 11.0071 8.88295L11.0001 8.99995V12.9999C11.0003 13.2548 11.0979 13.5 11.2729 13.6853C11.4479 13.8707 11.687 13.9822 11.9414 13.9971C12.1959 14.0121 12.4464 13.9293 12.6419 13.7657C12.8373 13.6021 12.9629 13.37 12.9931 13.1169L13.0001 12.9999V8.99995C13.0001 8.73473 12.8947 8.48038 12.7072 8.29284C12.5196 8.10531 12.2653 7.99995 12.0001 7.99995Z"
                                            fill="#F08929"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_478_946">
                                            <rect
                                              width="24"
                                              height="24"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                      {msg}
                                    </span>
                                  </>
                                )}
                              />
                              <Field
                                name="email"
                                type="text"
                                className="name__field text"
                                placeholder={`${translations.formplaceholder4}`}
                              />
                            </div>

                            <div className="tooltip-container">
                              <ErrorMessage
                                name="message"
                                render={(msg) => (
                                  <>
                                    <span className="tooltip__message">
                                      {" "}
                                      <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clip-path="url(#clip0_478_946)">
                                          <path
                                            d="M13.2991 3.14795L21.9331 18.1019C22.0647 18.33 22.134 18.5886 22.134 18.8519C22.134 19.1152 22.0647 19.3739 21.9331 19.6019C21.8014 19.83 21.6121 20.0193 21.384 20.151C21.156 20.2826 20.8974 20.3519 20.6341 20.3519H3.36605C3.10275 20.3519 2.84409 20.2826 2.61606 20.151C2.38804 20.0193 2.19869 19.83 2.06704 19.6019C1.93539 19.3739 1.86609 19.1152 1.86609 18.8519C1.86609 18.5886 1.9354 18.33 2.06705 18.1019L10.7011 3.14795C11.2781 2.14795 12.7211 2.14795 13.2991 3.14795ZM12.0001 14.9999C11.7348 14.9999 11.4805 15.1053 11.2929 15.2928C11.1054 15.4804 11.0001 15.7347 11.0001 15.9999C11.0001 16.2652 11.1054 16.5195 11.2929 16.7071C11.4805 16.8946 11.7348 16.9999 12.0001 16.9999C12.2653 16.9999 12.5196 16.8946 12.7072 16.7071C12.8947 16.5195 13.0001 16.2652 13.0001 15.9999C13.0001 15.7347 12.8947 15.4804 12.7072 15.2928C12.5196 15.1053 12.2653 14.9999 12.0001 14.9999ZM12.0001 7.99995C11.7551 7.99998 11.5187 8.08991 11.3357 8.25266C11.1526 8.41542 11.0357 8.6397 11.0071 8.88295L11.0001 8.99995V12.9999C11.0003 13.2548 11.0979 13.5 11.2729 13.6853C11.4479 13.8707 11.687 13.9822 11.9414 13.9971C12.1959 14.0121 12.4464 13.9293 12.6419 13.7657C12.8373 13.6021 12.9629 13.37 12.9931 13.1169L13.0001 12.9999V8.99995C13.0001 8.73473 12.8947 8.48038 12.7072 8.29284C12.5196 8.10531 12.2653 7.99995 12.0001 7.99995Z"
                                            fill="#F08929"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_478_946">
                                            <rect
                                              width="24"
                                              height="24"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                      {msg}
                                    </span>
                                  </>
                                )}
                              />
                              <Field
                                as="textarea"
                                name="message"
                                className="message__field"
                                placeholder={`${translations.formplaceholder7}`}
                              />
                            </div>
                            <div className="privacy__rights">
                              <label className="privacy__rights__label">
                                <div class="checkbox-wrapper-46">
                                  <Field
                                    name="acceptPolicy"
                                    type="checkbox"
                                    id="cbx-46"
                                    class="inp-cbx"
                                  />
                                  <label for="cbx-46" class="cbx">
                                    <span>
                                      <svg
                                        viewBox="0 0 12 10"
                                        height="10px"
                                        width="12px"
                                      >
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg>
                                    </span>
                                  </label>
                                </div>
                                <span className="privacy__rights__span">
                                  {translations.formrights1}
                                  <Link
                                    href={"/dataprotection"}
                                    className="underline"
                                  >
                                    {translations.formrights2}
                                  </Link>
                                </span>
                              </label>
                              <ErrorMessage
                                name="acceptPolicy"
                                className="mt-3"
                                render={(msg) => (
                                  <span className="error__message">
                                    {msg.charAt(0).toUpperCase() + msg.slice(1)}
                                  </span>
                                )}
                              />
                              <button type="submit" className="button__submit">
                                <span className="send__span">
                                  {translations.sendbutton}
                                </span>
                                <svg
                                  className="send__svg"
                                  width="25"
                                  height="24"
                                  viewBox="0 0 25 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_307_1013)">
                                    <path
                                      d="M2.02651 9.315C1.50451 9.141 1.49951 8.86 2.03651 8.681L21.1235 2.319C21.6525 2.143 21.9555 2.439 21.8075 2.957L16.3535 22.043C16.2035 22.572 15.8985 22.59 15.6745 22.088L12.0805 14L18.0805 6L10.0805 12L2.02651 9.315Z"
                                      fill="white"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_307_1013">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                        transform="translate(0.0805054)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                    {/* <div className="w-[90%] ml-[10px] m-auto h-[0.5px] bg-[#0b0b2186]"/> */}
                    <div className="contact__bottom__div">
                      <div className="contact__bottom__text__div">
                        <h4
                          className={`${poppins.className} contact__bottom__title`}
                        >
                          {translations.mainorspan}
                        </h4>
                        <span
                          className={`${poppins.className} contact__bottom__description`}
                          dangerouslySetInnerHTML={{__html: translations.contactplannerdescription}}
                        >
                          {/* If you know most general espects of the project you
                          want, you can{" "}
                          <span className="font-semibold">
                            visit our project planner for more refined
                            step-by-step prrocess.
                          </span> */}
                        </span>
                        <span
                          className={`${poppins.className} contact__bottom__description__small`}
                          dangerouslySetInnerHTML={{__html: translations.contactplannerdescriptionsmall}}
                        >
                          {/* If you know most general espects of the project you
                          want, you can{" "}
                          <span className="font-semibold">
                            visit our project planner for more refined
                            step-by-step prrocess.
                          </span> */}
                        </span>
                      </div>
                      <a
                        href={"/projectplanner"}
                        className={`${poppins.className} contact__planner__button`}
                      >
                        <span className="planificador">{translations.planificator}</span>
                        <span className="planificador__small">{translations.planificatorsmall}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className={
                  isScrolled == 3
                    ? "header__section__0"
                    : isScrolled == 1
                    ? "header__section__scrolled"
                    : "header__section"
                }
              >
                <div
                  className={
                    isScrolled === 1
                      ? "header__main__div cristal"
                      : "header__main__div__no__scrolled"
                  }
                >
                  <Image
                    alt="logo"
                    src={AngelyLogo}
                    className={
                      isScrolled ? "Skaili__logo__scrolled" : "Skaili__logo"
                    }
                  />
                  <div className="header__elements__div">
                    {/* Otros elementos de la cabecera */}
                    <a href="#about__section" className="footer__links__span">
                      {translations.headerelement1}
                    </a>
                    <a
                      href="#services__section"
                      className="footer__links__span"
                    >
                      {translations.headerelement2}
                    </a>
                    <a href="#process__section" className="footer__links__span">
                      {translations.headerelement3}
                    </a>
                    <a
                      href="#questions__section"
                      className="footer__links__span"
                    >
                      {translations.headerelement4}
                    </a>
                    <button
                      className="footer__links__span"
                      onClick={() => {
                        setContactForm(true);
                      }}
                    >
                      {translations.contactbutton}
                    </button>
                  </div>

                  <div className="small__devices__buttons__div">
                    <Link
                      href="/projectplanner"
                      className={`header__contact__button ${
                        toggleMenu ? "active" : ""
                      }`}
                    >
                      {translations.headerplannerbutton}
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
                    <button
                      className={`header__nav__toggle__button ${
                        toggleMenu ? "active" : ""
                      }`}
                      onClick={() => setToggleMenu((prev) => !prev)}
                    >
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={toggleMenu}
                        onChange={() => setToggleMenu((prev) => !prev)}
                      />
                      <label htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                      </label>
                    </button>
                  </div>
                </div>
                <div
                  className={
                    toggleMenu
                      ? "contact__form__section__toggle open"
                      : "contact__form__section__toggle"
                  }
                >
                  <div
                    className="contact__cristal__div__menu"
                    onClick={() => {
                      setContactForm(false);
                    }}
                  ></div>
                  <div className="header__toggle__menu__div">
                    <div className="header__toggle__menu__big__div">
                      <div className="header__toggle__menu__div__items">
                        <a
                          onClick={() => {
                            setToggleMenu((prev) => !prev);
                          }}
                          href="#about__section"
                          className={`header__toggle__menu__item ${titillium.className}`}
                        >
                          About Us
                        </a>
                        <a
                          onClick={() => {
                            setToggleMenu((prev) => !prev);
                          }}
                          href="#services__section"
                          className={`header__toggle__menu__item ${titillium.className}`}
                        >
                          Services
                        </a>
                        <a
                          onClick={() => {
                            setToggleMenu((prev) => !prev);
                          }}
                          href="#process__section"
                          className={`header__toggle__menu__item ${titillium.className}`}
                        >
                          Process
                        </a>
                        <a
                          onClick={() => {
                            setToggleMenu((prev) => !prev);
                          }}
                          href="#questions__section"
                          className={`header__toggle__menu__item ${titillium.className}`}
                        >
                          {translations.headerelement3}
                        </a>
                        <button
                          onClick={() => {
                            setToggleMenu((prev) => !prev);
                            setContactForm(true);
                          }}
                          className={`header__toggle__menu__item ${titillium.className}`}
                        >
                          {translations.contactbutton} 
                        </button>
                      </div>
                      <div className="m-auto w-[90%] h-[0.1px] bg-white" />
                      <div className="header__toggle__stars__div">
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="main__page__main__div__bg">
                {/* <script
                  type="module"
                  src="https://unpkg.com/@splinetool/viewer@1.1.9/build/spline-viewer.js"
                ></script>
                <spline-viewer url="https://prod.spline.design/yxd7Ro5LO2T4ed11/scene.splinecode"></spline-viewer> */}
              <div className="main__screen__text__div">
                <span className={`main__screen__title ${titillium.className}`}>
                  {translations.maintitle1}
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
                      {translations.maintitle2}
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

                    <span
                      className="main__screen__important__policy"
                      dangerouslySetInnerHTML={{
                        __html: translations.mainpolicy,
                      }}
                    ></span>
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
                    <button
                      className="main__screen__contact__button"
                      onClick={() => {
                        setContactForm(true);
                      }}
                    >
                      {translations.maincontactbutton}
                      <svg
                        className="main__screen__contact__svg"
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
                    </button>
                    <span className={`main__screen__or ${titillium.className}`}>
                      {translations.mainorspan}
                    </span>
                    <Link
                    href={"/projectplanner"}
                      className="main__screen__planer__button"
                    >
                      <span>{translations.mainplannerbutton}</span>
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
            </div>

            <TechWrapper images={images} />
            <About />
            <Services />
            <div ref={containerRef}>
              <motion.section
                className="process__section"
                id="process__section"
              >
                <motion.div className="process__sticky__content sticky">
                  <span className="process__section__name">
                    {translations.processsectionname}
                  </span>
                  <div className="process__title__div">
                    {/* <Image src={ProcessPoints} alt="points"/> */}
                    <h2
                      className={`process__main__text ${poppins.className}`}
                      dangerouslySetInnerHTML={{
                        __html: translations.processtitle,
                      }}
                    ></h2>
                  </div>
                </motion.div>
                <div className="process__main__div">
                  <span className={`${be_vietnam_pro.className} step__number`}>
                    {currentStep}
                  </span>
                  <div className="process__line__div">
                    {" "}
                    <div className="step__marker" />{" "}
                    <div className="step__marker" />{" "}
                    <div className="step__marker" />{" "}
                    <div className="step__marker" />
                  </div>
                  <div className="process__steps__col__div">
                    {processSteps.map((step, index) => (
                      <Step key={index} step={step} index={index} />
                    ))}
                  </div>
                </div>
              </motion.section>
            </div>
            <div className="questions__wrapper">
          <div className="questions__spline__animation__big">
            <script
              type="module"
              src="https://unpkg.com/@splinetool/viewer@1.2.5/build/spline-viewer.js"
            ></script>
            <spline-viewer url="https://prod.spline.design/Zs6wfwCMBr9H3N5M/scene.splinecode"></spline-viewer>
          </div>
          <div className="questions__spline__animation__mid">
            <script
              type="module"
              src="https://unpkg.com/@splinetool/viewer@1.2.4/build/spline-viewer.js"
            ></script>
            <spline-viewer url="https://prod.spline.design/Zs6wfwCMBr9H3N5M/scene.splinecode"></spline-viewer>
          </div>
          <section className="questions__section" id="questions__section">
            <Image
              src={QuestionsPoints}
              alt="points"
              className="questions__points"
            />
            <Image
              src={QuestionsPoints}
              alt="points"
              className="questions__points__bottom"
            />
            <div className="questions__main__div">
              <div className="questions__title__div">
                <span className="questions__section__name">FAQs</span>
                <h2 className="questions__main__title">
                  {translations.faqstitle}
                
                </h2>
              </div>
              <div className="questions__div">
                <div
                  className="question__div"
                  onClick={() =>
                    setQuestion((prev) => {
                      if (prev == "1") {
                        return "0";
                      } else return "1";
                    })
                  }
                >
                  <div className="question__not__hidden__div">
                    <span
                      className={`question__main__span ${poppins.className}`}
                    >
                      {translations.question1}
                    </span>
                    {question == "1" ? (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.8125 12C20.8125 12.1492 20.7532 12.2923 20.6477 12.3977C20.5423 12.5032 20.3992 12.5625 20.25 12.5625H3.75C3.60082 12.5625 3.45774 12.5032 3.35225 12.3977C3.24676 12.2923 3.1875 12.1492 3.1875 12C3.1875 11.8508 3.24676 11.7077 3.35225 11.6023C3.45774 11.4968 3.60082 11.4375 3.75 11.4375H20.25C20.3992 11.4375 20.5423 11.4968 20.6477 11.6023C20.7532 11.7077 20.8125 11.8508 20.8125 12Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                  {question == "1" ? (
                    <div className="ml-5 mb-5 mt-2 w-[90%]">
                      <span
                        className={`question__1__text ${poppins.className}`}
                        dangerouslySetInnerHTML={{__html: translations.text1}}
                      >
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
                </div>
                <div
                  className="question__div"
                  onClick={() =>
                    setQuestion((prev) => {
                      if (prev == "2") {
                        return "0";
                      } else return "2";
                    })
                  }
                >
                  <div className="question__not__hidden__div">
                    <span
                      className={`question__main__span ${poppins.className}`}
                    >
                      {translations.question2}
                    </span>
                    {question == "2" ? (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.8125 12C20.8125 12.1492 20.7532 12.2923 20.6477 12.3977C20.5423 12.5032 20.3992 12.5625 20.25 12.5625H3.75C3.60082 12.5625 3.45774 12.5032 3.35225 12.3977C3.24676 12.2923 3.1875 12.1492 3.1875 12C3.1875 11.8508 3.24676 11.7077 3.35225 11.6023C3.45774 11.4968 3.60082 11.4375 3.75 11.4375H20.25C20.3992 11.4375 20.5423 11.4968 20.6477 11.6023C20.7532 11.7077 20.8125 11.8508 20.8125 12Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                  {question == "2" ? (
                    <div className="ml-5 mb-5 mt-2 w-[90%]">
                      <span
                        className={`question__1__text ${poppins.className}`}
                        dangerouslySetInnerHTML={{__html: translations.text2}}
                      >
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
                </div>
                {/* <div
                  className="question__div"
                  onClick={() =>
                    setQuestion((prev) => {
                      if (prev == "3") {
                        return "0";
                      } else return "3";
                    })
                  }
                >
                  <div className="question__not__hidden__div">
                    <span
                      className={`question__main__span ${poppins.className}`}
                    >
                      {translations.question3}
                    </span>
                    {question == "3" ? (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.8125 12C20.8125 12.1492 20.7532 12.2923 20.6477 12.3977C20.5423 12.5032 20.3992 12.5625 20.25 12.5625H3.75C3.60082 12.5625 3.45774 12.5032 3.35225 12.3977C3.24676 12.2923 3.1875 12.1492 3.1875 12C3.1875 11.8508 3.24676 11.7077 3.35225 11.6023C3.45774 11.4968 3.60082 11.4375 3.75 11.4375H20.25C20.3992 11.4375 20.5423 11.4968 20.6477 11.6023C20.7532 11.7077 20.8125 11.8508 20.8125 12Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.75 16C27.7 5 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                  {question == "3" ? (
                    <div className="ml-5 mb-5 mt-2 w-[90%]">
                      <span
                        className={`question__1__text ${poppins.className}`}
                      >
                        {translations.text3}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
                </div> */}
                {/* <div
                className="question__div"
                onClick={() =>
                  setQuestion((prev) => {
                    if (prev == "4") {
                      return "0";
                    } else return "4";
                  })
                }
              >
                <div className="question__not__hidden__div">
                  <span className={`question__main__span ${poppins.className}`}>
                    {translations.question4}
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                      fill="white"
                    />
                  </svg>
                </div>
                {question == "4" ? (
                  <div className="ml-5 mb-5 mt-2 w-[90%]">
                    <span className={`question__1__text ${poppins.className}`}>
                      {translations.text4}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
              </div> */}
                <div
                  className="question__div"
                  onClick={() =>
                    setQuestion((prev) => {
                      if (prev == "5") {
                        return "0";
                      } else return "5";
                    })
                  }
                >
                  <div className="question__not__hidden__div">
                    <span
                      className={`question__main__span ${poppins.className}`}
                    >
                      {translations.question5}
                    </span>
                    {question == "5" ? (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.8125 12C20.8125 12.1492 20.7532 12.2923 20.6477 12.3977C20.5423 12.5032 20.3992 12.5625 20.25 12.5625H3.75C3.60082 12.5625 3.45774 12.5032 3.35225 12.3977C3.24676 12.2923 3.1875 12.1492 3.1875 12C3.1875 11.8508 3.24676 11.7077 3.35225 11.6023C3.45774 11.4968 3.60082 11.4375 3.75 11.4375H20.25C20.3992 11.4375 20.5423 11.4968 20.6477 11.6023C20.7532 11.7077 20.8125 11.8508 20.8125 12Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                  {question == "5" ? (
                    <div className="ml-5 mb-5 mt-2 w-[90%]">
                      <span
                        className={`question__1__text ${poppins.className}`}
                      >
                        {translations.text5}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
                </div>
                <div
                  className="question__div"
                  onClick={() =>
                    setQuestion((prev) => {
                      if (prev == "6") {
                        return "0";
                      } else return "6";
                    })
                  }
                >
                  <div className="question__not__hidden__div">
                    <span
                      className={`question__main__span ${poppins.className}`}
                    >
                      {translations.question6}
                    </span>

                    {question == "6" ? (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.8125 12C20.8125 12.1492 20.7532 12.2923 20.6477 12.3977C20.5423 12.5032 20.3992 12.5625 20.25 12.5625H3.75C3.60082 12.5625 3.45774 12.5032 3.35225 12.3977C3.24676 12.2923 3.1875 12.1492 3.1875 12C3.1875 11.8508 3.24676 11.7077 3.35225 11.6023C3.45774 11.4968 3.60082 11.4375 3.75 11.4375H20.25C20.3992 11.4375 20.5423 11.4968 20.6477 11.6023C20.7532 11.7077 20.8125 11.8508 20.8125 12Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                  {question == "6" ? (
                    <div className="ml-5 mb-5 mt-2 w-[90%]">
                      <span
                        className={`question__1__text ${poppins.className}`}
                        dangerouslySetInnerHTML={{__html: translations.text6}}
                      >
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
                </div>
                <div
                  className="question__div"
                  onClick={() =>
                    setQuestion((prev) => {
                      if (prev == "7") {
                        return "0";
                      } else return "7";
                    })
                  }
                >
                  <div className="question__not__hidden__div">
                    <span
                      className={`question__main__span ${poppins.className}`}
                    >
                      {translations.question7}
                    </span>
                    {question == "7" ? (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.8125 12C20.8125 12.1492 20.7532 12.2923 20.6477 12.3977C20.5423 12.5032 20.3992 12.5625 20.25 12.5625H3.75C3.60082 12.5625 3.45774 12.5032 3.35225 12.3977C3.24676 12.2923 3.1875 12.1492 3.1875 12C3.1875 11.8508 3.24676 11.7077 3.35225 11.6023C3.45774 11.4968 3.60082 11.4375 3.75 11.4375H20.25C20.3992 11.4375 20.5423 11.4968 20.6477 11.6023C20.7532 11.7077 20.8125 11.8508 20.8125 12Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                  {question == "7" ? (
                    <div className="ml-5 mb-5 mt-2 w-[90%]">
                      <span
                        className={`question__1__text ${poppins.className}`}
                        dangerouslySetInnerHTML={{__html: translations.text7}}
                      >
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
                </div>
              </div>
              <div className="questions__ask__div">
                <h3 className="questions__ask__title">
                  {translations.faqsasktitle}
                </h3>
                <button onClick={() => {setContactForm(true)}} className="questions__ask__button">
                  {translations.faqsaskbutton}
                
                  <svg
                  className="questions__ask__svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5001 21C14.4562 21.0957 14.3858 21.1769 14.2971 21.2338C14.2085 21.2906 14.1054 21.3209 14.0001 21.3209C13.8948 21.3209 13.7917 21.2906 13.703 21.2338C13.6144 21.1769 13.5439 21.0957 13.5001 21L10.0001 14L3.00007 10.5C2.90433 10.4561 2.8232 10.3857 2.76632 10.2971C2.70944 10.2084 2.6792 10.1053 2.6792 10C2.6792 9.89468 2.70944 9.79158 2.76632 9.70295C2.8232 9.61431 2.90433 9.54387 3.00007 9.5L21.0001 3L18.0331 11.215M19.0001 22V22.01M19.0001 19C19.4484 18.9986 19.8832 18.8468 20.235 18.569C20.5869 18.2911 20.8353 17.9033 20.9406 17.4675C21.0459 17.0318 21.002 16.5733 20.8159 16.1655C20.6298 15.7576 20.3122 15.424 19.9141 15.218C19.5162 15.0142 19.0612 14.951 18.6229 15.0387C18.1846 15.1264 17.7889 15.3598 17.5001 15.701"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
            <BottomCarousel />

            <section className="footer__section">
              <div className="footer__main__div">
                <div className="footer__top__div">
                  <div className="footer__title__div">
                    <h2 className={`footer__main__title ${poppins.className}`}>
                      {translations.footertitle}
                    </h2>
                    <h2
                      className={`footer__main__title__small ${poppins.className}`}
                    >
                      {translations.footertitlesmall}
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
                    {translations.footerdescription}
                  </span>
                  <span className="footer__main__description__small">
                    Skaili agency is a digitalitzation agency that offers
                    profesional web solutions around the world.
                  </span>
                  <div className="footer__buttons__div">
                    <button
                      className="footer__contact__button"
                      onClick={() => {
                        setContactForm(true);
                      }}
                    >
                      {translations.footerquote}
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
                    </button>
                    {/* <span className={`${titillium.className} footer__or__span`}>OR</span> */}
                    <Link
                      href={"/projectplanner"}
                      className="footer__planer__button"
                    >
                      {translations.footerplanner}
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
                  <div className="footer__email__span__small">
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
                <div className="footer__middle__line" />
                <div className="footer__bottom__div">
                  <Image
                    src={SkailiFooterLogo}
                    alt="Skaili logo"
                    className="footer__logo__image"
                  />
                  <div className="footer__elements__div">
                    <a
                      className="footer__links__span"
                      href="#services__section"
                    >
                      {translations.headerelement1}
                    </a>
                    <a
                      className="footer__links__span"
                      href="#services__section"
                    >
                      {translations.headerelement2}
                    </a>
                    <a href="#process__section" className="footer__links__span">
                      {translations.headerelement3}
                    </a>
                    <a
                      className="footer__links__span"
                      href="#questions__section"
                    >
                      {translations.headerelement4}
                    </a>
                  </div>
                  <div className="footer__email__div">
                    <span className="footer__email__intro">
                      {translations.emailtitle}
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
              <div className="footer__rights__div">
                <span className="footer__rights__span">
                  {translations.rights}
                </span>
              </div>
            </section>
          </>
        )}
      </Translator>
    </main>
  );
}
