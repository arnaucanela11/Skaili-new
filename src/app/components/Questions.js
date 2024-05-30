"use client";
import { useEffect, useState } from "react";
import "./components.css";
import { Poppins } from "next/font/google";
import Translator from "./Translator";
import Link from "next/link";
import Image from "next/image";
import QuestionsPoints from "../assets/QuestionsPoints.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

function Questions() {
  const [question, setQuestion] = useState("1");

  return (
    <Translator>
      {(translations) => (
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
                      >
                        {translations.text1}
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
                      >
                        {translations.text2}
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
                          d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
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
                </div>
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
                      >
                        {translations.text6}
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
                      >
                        {translations.text7}
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
                <Link href={"/contact"} className="questions__ask__button">
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
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}
    </Translator>
  );
}

export default Questions;
