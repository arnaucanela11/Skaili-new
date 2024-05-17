import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Translator from "./Translator";
import { poppins } from "./MainScreen";
import ProcessAnimation1 from "../assets/ProcessImage1.png";
import { be_vietnam_pro } from "../page";
import { useInView } from 'react-intersection-observer';
import { useScroll } from 'react-use';

const processSteps = [
  {
    number: "01",
    title: "Get In Touch",
    description:
      "The first step in the process is to get in touch. For that, we offer both our contact form (to explain the idea you have in mind or ask any question) and our project planner (if you have a clearer idea of your project). We let's responde you the faster we can, explaining all the details (including the budget).",
    image: ProcessAnimation1,
  },
  {
    number: "02",
    title: "Step Two",
    description: "If you agree with the budget, estimated time, and all the other details, we will can start working on your project. Most times you will have two persons (one designer and one developer) working on your project. During the process stay in touch to ensure that we create the project you had in your mind.",
    image: ProcessAnimation1,
  },
  {
    number: "03",
    title: "Step Three",
    description: "Finally, it will be time to deliver the final product. If you like the product, we will consider the project completed. On the other hand, if you're not satisfied, we can make the necessary adjustments (at no extra cost), or cancel the contract if the delivered product is significantly different from the one initially requested (in this case, no fees will be charged for the services provided).",
    image: ProcessAnimation1,
  },
  {
    number: "04",
    title: "Step Four",
    description: "Even though we have declared the project completed, this does not mean that the contract between Skaili Agency (as a web service provider) and you has ended. We will therefore handle both the maintenance of your website and the correction of any minor errors that may arise in the future.",
    image: ProcessAnimation1,
  },
];

const Step = ({ step, index }) => {
  return (
    <div key={index} className="process__main__target__div">
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
    </div>
  );
};

function Process() {
  const [currentStep, setCurrentStep] = useState(processSteps[0].number);
  const containerRef = useRef(null);
  const { y } = useScroll(containerRef);
  const stepRefs = useRef([]);
  const { height } = useInView({ ref: containerRef });

  useEffect(() => {
    if (!height) return;

    const stepHeight = height / processSteps.length;
    const currentStepNumber = Math.ceil(y / stepHeight);
    setCurrentStep(processSteps[currentStepNumber - 1].number);
  }, [y, height]);

  return (
    <Translator>
      {(translations) => (
        <div ref={containerRef} className="relative ">
          <motion.section className="process__section" id="process__section">
            <motion.div className="process__sticky__content sticky">
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
                {currentStep}
              </span>
              <div className="process__line__div" />
              <div className="process__steps__col__div">
                {processSteps.map((step, index) => (
                  <Step
                    key={index}
                    step={step}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      )}
    </Translator>
  );
}

export default Process;
