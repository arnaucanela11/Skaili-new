"use client";
import Image from "next/image";
import AngelyLogo from "../assets/SkailiLogo.png";
import ProjectPoints from "../assets/ProjectPoints.png";
import ProjectBG from "../assets/ProjectBG.png";
import ProjectPointsSmall1 from "../assets/ProjectPointsSmall1.png";
import ProjectImage from "../assets/ProjectImage.png";
import Link from "next/link";
import "./contact.css";
import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import * as yup from "yup";
import Translator from "../components/Translator";
import Header from "../components/Header";
import { useState } from "react";
import "./contact.css";
import { poppins } from "../page";
import Footer from "../components/Footer";
import { titillium } from "../page";
import useTranslation from "../hooks/useTranslation";
import SkailiFooterLogo from "../assets/FooterLogo.png";

const serviceOptions = [
  "Web Development with CSM (no code tools)",
  "SEO",
  "Web Development with code tools",
  "Web Design",
  "Others (explain us in the message section)",
  "Content writting",
];

const translatedServiceOptions = (translations) => [
  translations.webDevelopmentNoCode,
  translations.seo,
  translations.webDevelopmentCode,
  translations.webDesign,
  translations.othersExplain,
  translations.contentWriting,
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


const initailaStateFull = {
  name: "",
  surname: "",
  email: "",
  company: "",
  timeline: "",
  inferiorlimit: "",
  superiorlimit: "",
  services: [],
  message: "",
  file: "",
};

const initailaState = {
  name: "",
  email: "",
  company: "",
  message: "",
  acceptPolicy: false,
};

const sendMessageFull = async (values) => {
  try {
    const resp = await fetch(
      // "https://skailee-09041f34dfef.herokuapp.com/api/mail/register",
      "https://om3ziwo23m.execute-api.eu-west-3.amazonaws.com/SendEmailFull",
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

function page() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [contactForm, setContactForm] = useState(false);

  const totalSteps = 4;

  const translations = useTranslation();

  const plannerSchema = yup.object().shape({
    name: yup.string().required("required"),
    surname: yup.string(),
    company: yup.string(),
    email: yup
      .string()
      .email("the email format is not correct")
      .required("required"),
    timeline: yup.date().required("You have to define a launch date."),
    inferiorlimit: yup.number().required("You have to define a budget."),
    superiorlimit: yup.number().required("You have to define a budget."),
    services: yup
      .array()
      .of(
        yup.string().oneOf(translatedServiceOptions(translations), "Invalid service")
      )
      .min(1, "At least one service must be selected") // Requiere al menos uno
      .required("You have to define at least one service"), // El array debe ser obligatorio
    message: yup.string().required("required"),
    file: yup.mixed(),
    // .test("fileType", "Only pdf or docx files are allowed", (value) => {
    //   if (!value) return false; // Si no hay archivo, devuelve falso
    //   const allowedTypes = [
    //     "application/pdf",
    //     "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    //     "application/msword",
    //   ];
    //   return allowedTypes.includes(value.type); // Verifica el tipo de archivo
    // })
    // .test("fileSize", "File is too large", (value) => {
    //   if (!value) return true; // Si no hay archivo, no verifica tamaño
    //   const maxSize = 10 * 1024 * 1024; // Máximo 5 MB
    //   return value.size <= maxSize; // Verifica el tamaño del archivo
    // }),
  });

  const handleSubmitContactFull = async (values, { resetForm }) => {
    if (!values.company) {
      values.company = "a company";
    }

    await sendMessageFull(values);

    resetForm();
    setCurrentStep(1);
  };

  const handleSubmitContact = async (values, { resetForm }) => {
    if (!values.company) {
      values.company = "a company";
    }
    await sendMessage(values);

    resetForm();
    setContactForm(false);
  };

  // Avanzar al siguiente paso
  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Retroceder al paso anterior
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [validationAttempted, setValidationAttempted] = useState(false);

  // Definir campos por paso
  const fieldsPerStep = {
    1: ["name", "email"],
    2: ["timeline", "inferiorlimit", "superiorlimit"],
    3: ["services"],
    4: ["message"],
  };

  const handleNext = async (validateForm, setTouched) => {
    const errors = await validateForm();
    const fieldsToValidate = fieldsPerStep[currentStep];

    // Si alguno de los campos del paso actual tiene errores
    const hasErrors = fieldsToValidate.some((field) => errors[field]);

    if (hasErrors) {
      // Marcar solo los campos del paso actual como "tocados"
      const newTouched = {};
      fieldsToValidate.forEach((field) => {
        newTouched[field] = true;
      });
      setTouched(newTouched);
      setValidationAttempted(true); // Indicar que se intentó validar
      return;
    }

    // Si no hay errores, avanzar al siguiente paso
    setCurrentStep(currentStep + 1);
    setValidationAttempted(false); // Reiniciar el intento de validación
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setValidationAttempted(false); // Reiniciar el intento de validación
    }
  };

  const handleSubmitFinal = async (validateForm, setTouched) => {
    const errors = await validateForm(); // Valida todo el formulario
    if (Object.keys(errors).length > 0) {
      const newTouched = {};
      Object.keys(errors).forEach((field) => {
        newTouched[field] = true;
      });
      setTouched(newTouched);
      setValidationAttempted(true); // Indicar que se validó
      return;
    }

    // Lógica para enviar el formulario
    console.log("Formulario enviado con éxito");
  };

  return (
    <Translator>
      {(translations) => (
        <main className="project__main">
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
                  <h2 className={`contact__main__title ${poppins.className}`}>
                    Provideo below your{" "}
                    <span className="text-[#3B71FE]">
                      contact <br />
                      data
                    </span>{" "}
                    and explain your idea:
                  </h2>
                  <h2
                      className={`contact__main__title__small ${poppins.className}`}
                    >
                      Provideo below your{" "}
                      <span className="text-[#3B71FE]">contact data</span>{" "}
                    </h2>
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
                            placeholder={`Company name`}
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
                            placeholder={`${translations.formplaceholder3}`}
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
                            placeholder={`Provide a summary of your project`}
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
                      OR
                    </h4>
                    <span
                      className={`${poppins.className} contact__bottom__description`}
                    >
                      If you know most general espects of the project you want,
                      you can{" "}
                      <span className="font-semibold">
                        visit our project planner for more refined step-by-step
                        prrocess.
                      </span>
                    </span>
                  </div>
                  <a
                    href={"/projectplanner"}
                    className={`${poppins.className} contact__planner__button`}
                  >
                    Project Planner
                  </a>
                </div>
              </div>
            </div>
          </section>
          <Image src={ProjectBG} className="project__main__bg" />
          <section className="header__section__project">
            <div className="header__main__div__project">
              <a href={"/"}>
                <Image
                  alt="logo"
                  src={AngelyLogo}
                  className="Skaili__logo__project"
                />
              </a>
              <div className="header__elements__div header__elements__div__project">
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
                <a href="/" className={`header__contact__button__project ${toggleMenu ? 'toggle-active' : ''}`}>
                  Home
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 14.9999H4.692V9.11591H9.308V14.9999H13V5.99991L7 1.46191L1 5.99991V14.9999ZM0 15.9999V5.49991L7 0.211914L14 5.49991V15.9999H8.308V10.1159H5.692V15.9999H0Z"
                      fill="#0E0E2C"
                    />
                  </svg>
                </a>
                <button
                  className={`header__nav__toggle__button ${
                    toggleMenu ? "active" : ""
                  }`}
                  style={{
                    background: "#fff",
                  }}
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
            <button className="header__nav__toggle-button__project">
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
            <div
              className={
                toggleMenu
                  ? "contact__form__section__toggle open"
                  : "contact__form__section__toggle"
              }
            >
              <div
                className="contact__cristal__div"
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
                      href="/#about__section"
                      className={`header__toggle__menu__item ${titillium.className}`}
                    >
                      About Us
                    </a>
                    <a
                      onClick={() => {
                        setToggleMenu((prev) => !prev);
                      }}
                      href="/#services__section"
                      className={`header__toggle__menu__item ${titillium.className}`}
                    >
                      Services
                    </a>
                    <a
                      onClick={() => {
                        setToggleMenu((prev) => !prev);
                      }}
                      href="/#process__section"
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
                      Contact
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
          <section className="project__section">
            <span className="project__section__name">{translations.projectsectionname}</span>
            <div className="project__main__text__div">
              <h2 className={`project__main__text ${poppins.className}`} dangerouslySetInnerHTML={{__html: translations.projecttitle}}>

              </h2>
              <span
                className={`project__main__description ${poppins.className}`}
              >
                {translations.projectsubtitle}
                
              </span>
            </div>
            <div className="project__main__div">
              <div className="project__main__div__left">
                <Image src={ProjectImage} />
              </div>
              <div className="project__main__div__right__small__devices">
                <div className="project__main__div__right__shadow" />
                <Image
                  src={ProjectPointsSmall1}
                  className="small__points__1"
                  alt="points1"
                />
                <Image
                  src={ProjectPointsSmall1}
                  className="small__points__2"
                  alt="points2"
                />
                <div className="project__main__div__right">
                  {/* Indicador del paso actual */}
                  <div className="project__step__div">
                    <div className="step-indicator">
                      {translations.step} {currentStep} {translations.of} {totalSteps}
                    </div>

                    {/* Barra de progreso */}
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{
                          width: `${(currentStep / totalSteps) * 100}%`, // Proporción completada
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Contenido del formulario basado en el paso actual */}
                  <Formik
                    validationSchema={plannerSchema}
                    initialValues={initailaStateFull}
                    onSubmit={(values, submitProps) =>
                      handleSubmitContactFull(values, submitProps)
                    }
                  >
                    {({
                      values,
                      handleSubmit,
                      handleBlur,
                      handleChange,
                      setFieldValue,
                      isValid,
                      setTouched,
                      validateForm,
                    }) => (
                      <form
                        className="contact__form__div"
                        onSubmit={handleSubmit}
                      >
                        {currentStep === 1 && (
                          <div className="step__form__main__div">
                            <h3
                              className={`${poppins.className} project__title__step`}
                            >
                              {translations.step1title}
                              
                            </h3>
                            {/* Form fields for step 1 */}
                            <div className="name__fields__div">
                              {/* <label  className="field__label">Name*</label> */}
                              <div className="flex flex-col justify-start gap-3 w-[100%]">
                                <div className="tooltip-container">
                                  {validationAttempted && (
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
                                  )}
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
                                name="surname"
                                type="text"
                                className="name__field text"
                                placeholder={`${translations.formplaceholder2}`}
                              />
                            </div>
                            <Field
                              name="company"
                              type="text"
                              className="name__field text"
                              placeholder={`${translations.formplaceholder3}`}
                            />
                            <div className="tooltip-container">
                              {validationAttempted && (
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
                              )}
                              <Field
                                name="email"
                                type="text"
                                className="name__field text"
                                placeholder={`${translations.formplaceholder4}`}
                              />
                            </div>
                          </div>
                        )}
                        {currentStep === 2 && (
                          <div className="step__form__main__div">
                            <h3
                              className={`${poppins.className} project__title__step`}
                            >
                            
                              {translations.step2title}
                            </h3>
                            {/* Form fields for step 1 */}
                            <div className="project__timeline__div">
                              {/* <label  className="field__label">Name*</label> */}
                              <div className="flex flex-col justify-start gap-3 w-fit">
                                <span className="project__timeline__span">
                                  {translations.timelinespan}
                                  
                                </span>
                              </div>
                              {/* <label className="field__label">Company (optional)</label> */}
                              <div className="tooltip-container">
                                {validationAttempted && (
                                  <ErrorMessage
                                    name="timeline"
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
                                )}
                                <Field
                                  name="timeline"
                                  type="date"
                                  className="name__field text"
                                  placeholder={`${translations.formplaceholder3}`}
                                />
                              </div>
                            </div>
                            <div className="project__timeline__div">
                              <span className="project__timeline__span">
                              
                                {translations.budgetspan1}
                              </span>

                              <div className="tooltip-container">
                                <div className="currency-field-wrapper">
                                  {validationAttempted && (
                                    <ErrorMessage
                                      name="inferiorlimit"
                                      render={(msg) => (
                                        <>
                                          <span className="tooltip__2">
                                            {" "}
                                            <svg
                                              width="24"
                                              height="24"
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
                                                    width="22"
                                                    height="22"
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
                                  )}
                                  <Field
                                    name="inferiorlimit"
                                    type="number"
                                    className="name__field" // Campo de entrada para el 70%
                                    placeholder={`${translations.formplaceholder5}`}
                                  />
                                  <span className="currency-symbol">€</span>{" "}
                                  {/* Simbolo de moneda */}
                                </div>
                              </div>
                              <span className="project__timeline__span">
                              
                                {translations.budgetspan2}
                              </span>

                              <div className="tooltip-container">
                                <div className="currency-field-wrapper">
                                  {validationAttempted && (
                                    <ErrorMessage
                                      name="superiorlimit"
                                      render={(msg) => (
                                        <>
                                          <span className="tooltip__2">
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
                                  )}
                                  <Field
                                    name="superiorlimit"
                                    type="number"
                                    className="name__field" // Campo de entrada para el 70%
                                    placeholder={`${translations.formplaceholder6}`}
                                  />
                                  <span className="currency-symbol">€</span>{" "}
                                  {/* Simbolo de moneda */}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {currentStep === 3 && (
                          <div className="step__form__main__div">
                            <h3
                              className={`${poppins.className} project__title__step`}
                            >
                              {translations.step3title}
                            </h3>
                            {/* Form fields for step 1 */}
                            <div className="project__services__div">
                              {/* <label  className="field__label">Name*</label> */}
                              <FieldArray
                                name="services" // Nombre del FieldArray
                                render={(arrayHelpers) => (
                                  <div className="service-grid">
                                    {" "}
                                    {/* El grid para los checkboxes */}
                                    {translatedServiceOptions(translations).map((service, index) => (
                                      <div
                                        key={index}
                                        className="service-checkbox"
                                      >
                                        {" "}
                                        {/* Estilo para el checkbox */}
                                        <div class="content">
                                          <label class="checkBox">
                                            <Field
                                              id="ch1"
                                              type="checkbox"
                                              name="services" // Nombre del FieldArray
                                              value={service} // Valor de este checkbox
                                              onChange={(e) => {
                                                // Manejo del cambio de estado
                                                if (e.target.checked) {
                                                  arrayHelpers.push(service); // Agrega al array si está seleccionado
                                                } else {
                                                  const idx =
                                                    arrayHelpers.form.values.services.indexOf(
                                                      service
                                                    );
                                                  arrayHelpers.remove(idx); // Elimina del array si se deselecciona
                                                }
                                              }}
                                            />
                                            <div class="transition"></div>
                                          </label>
                                        </div>
                                        <label>{service}</label>{" "}
                                        {/* Etiqueta para el checkbox */}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              />
                              {validationAttempted && (
                                <ErrorMessage
                                  name="services"
                                  render={(msg) => (
                                    <div className="services__error__div">
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
                                    </div>
                                  )}
                                />
                              )}
                            </div>
                          </div>
                        )}
                        {currentStep === 4 && (
                          <div className="step__form__main__div">
                            <h3
                              className={`${poppins.className} project__title__step`}
                            >
                              {translations.step4title}
                              
                            </h3>
                            {/* Form fields for step 1 */}
                            <div className="project__details__div">
                              <div className="tooltip-container">
                                {validationAttempted && (
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
                                )}
                                <Field
                                  as="textarea"
                                  name="message"
                                  className="project__message__field"
                                  placeholder={`${translations.formplaceholder7}`}
                                />
                              </div>
                              {/* <div className="project__details__file__div">
                              <div className="project__details__text__div">
                                <span className="project__details__file__span">
                                  Or upload a project brief
                                </span>
                                <span className="project__details__file__span">
                                  PDF, docx... (max size 10MB)
                                </span>
                              </div>
                              <Field
                                name="file"
                                type="file"
                                onChange={handleChange}
                                className="file__field"
                                placeholder={`Provide a summary of your project`}
                              />
                            </div> */}
                            </div>
                          </div>
                        )}
                        <div className="project__step__buttons__div">
                          {currentStep > 1 && (
                            <button
                              className="project__step__buttons__prev"
                              onClick={handlePrevious}
                            >
                              
                              {translations.prev}
                            </button>
                          )}
                          {currentStep < totalSteps && (
                            <button
                              className="project__step__buttons__next"
                              onClick={() =>
                                handleNext(validateForm, setTouched)
                              }
                            >
                              {translations.next}
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0201 18L16.0201 12L10.0201 6L8.61011 7.41L13.1901 12L8.61011 16.59L10.0201 18Z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          )}
                          {currentStep === totalSteps && (
                            <button
                              type="submit"
                              onClick={() =>
                                handleSubmitFinal(validateForm, setTouched)
                              }
                              className="project__button__submit"
                            >
                              <span className="send__span">
                                {translations.sendbutton}
                              </span>
                              <svg
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
                          )}
                        </div>
                      </form>
                    )}
                  </Formik>
                  <Image
                    src={ProjectPoints}
                    alt="project points"
                    className="project__points"
                  />
                </div>
              </div>
            </div>
          </section>
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
                  <a className="footer__title__circle" href="/#main__screen">
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
                  <button className="footer__contact__button"
                                        onClick={() => {
                                          setContactForm(true);
                                        }}>
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
                  {/* <Link href={"/contact"} className="footer__planer__button">
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
                  </Link> */}
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
                    href="/#about__section"
                  >
                    {translations.headerelement1}
                  </a>
                  <a
                    className="footer__links__span"
                    href="/#services__section"
                  >
                    {translations.headerelement2}
                  </a>
                  <a href="/#process__section" className="footer__links__span">
                    {translations.headerelement3}
                  </a>
                  <a
                    className="footer__links__span"
                    href="/#questions__section"
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
        </main>
      )}
    </Translator>
  );
}

export default page;
