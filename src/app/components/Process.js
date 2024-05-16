"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Translator from "./Translator";
import { poppins } from "./MainScreen";
import ProcessAnimation1 from "../assets/ProcessImage1.png";
import ProcessPoints from "../assets/ProcessPoints.png";
import { be_vietnam_pro } from "../page";
import { useInView, InView } from "react-intersection-observer";

const processSteps = [
  {
    number: "01",
    title: "Get In Touch",
    description:
      "The first step in the process is to get in touch. For that, we offer both our contact form (to explain the idea you have in mind or ask any question) and our project planner (if you have a clearer idea of your project). We let's responde you the faster we can, explaining all the details (including the budget).",
    image: ProcessAnimation1,
  },
  {
    number: "01",
    title: "Get In Touch",
    description:
      "The first step in the process is to get in touch. For that, we offer both our contact form (to explain the idea you have in mind or ask any question) and our project planner (if you have a clearer idea of your project). We let's responde you the faster we can, explaining all the details (including the budget).",
    image: ProcessAnimation1,
  },
  {
    number: "01",
    title: "Get In Touch",
    description:
      "The first step in the process is to get in touch. For that, we offer both our contact form (to explain the idea you have in mind or ask any question) and our project planner (if you have a clearer idea of your project). We let's responde you the faster we can, explaining all the details (including the budget).",
    image: ProcessAnimation1,
  },
  {
    number: "01",
    title: "Get In Touch",
    description:
      "The first step in the process is to get in touch. For that, we offer both our contact form (to explain the idea you have in mind or ask any question) and our project planner (if you have a clearer idea of your project). We let's responde you the faster we can, explaining all the details (including the budget).",
    image: ProcessAnimation1,
  },
];

function Process() {
  const [isSticky, setIsSticky] = useState(false);
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);
  const [view4, setView4] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    setIsSticky(inView);
  }, [inView]);

  return (
    <Translator>
      {(translations) => (
        <motion.section className={`process__section ${isSticky ? "sticky" : ""}`} id="process__section">
          <motion.div
            className={`process__sticky__content`}
            ref={ref}
          >
            <span className="process__section__name">PROCESS</span>
            <div className="process__title__div">
              <h2 className={`process__main__text ${poppins.className}`}>
                KNOW ABOUT OUR
                <span className="text-[#586CF5]"> WORKING PROCESS</span>
              </h2>
            </div>
            
          </motion.div>
          <div className="process__main__div">
            <span className={`${be_vietnam_pro.className} step__number`}>
              01
            </span>
            <div className="process__line__div" />
            <div className="process__steps__col__div">
              {processSteps.map((step, index) => (
                <InView
                  as="div"
                  onChange={(inView, entry) => {
                    if (index == 0) {
                      setView1(inView);
                    }
                    if (index == 1) {
                      setView2(inView);
                    }
                    if (index == 2) {
                      setView3(inView);
                    }
                    if (index == 3) {
                      setView4(inView);
                    }
                  }}
                  key={index}
                  className={`process__main__target__div ${
                    index == 0
                      ? view1
                        ? "in-view"
                        : ""
                      : index == 1
                      ? view2
                        ? "in-view"
                        : ""
                      : index == 2
                      ? view3
                        ? "in-view"
                        : ""
                      : index == 3
                      ? view4
                        ? "in-view"
                        : ""
                      : ""
                  }`}
                >
                  <div className="step__marker" />
                  <div className="process__step__div">
                    <div className="process__step__text__div">
                      <h3 className="process__step__title">
                        {step.title} <span className="text-[#3B71FE]">.</span>
                      </h3>
                      <span className="process__step__description">
                        {step.description}
                      </span>
                    </div>
                    <Image src={step.image} alt="illustration" />
                  </div>
                </InView>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </Translator>
  );
}

export default Process;
