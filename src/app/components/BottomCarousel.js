import { titillium } from "./MainScreen";
import "./components.css";

const Marquee = () => {
  const text = "LET'S WORK TOGETHER ";
  return (
    <section className="bottom__carousel__section">
      <div class="marquee">
        <div class="track">
          <div class={`marquee__text__1 ${titillium.className}`}>
            &nbsp;LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. 
            LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. 
            LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. 
          </div>
        </div>
      </div>
      <div class="marquee">
        <div class="track__2">
          <div class={`marquee__text__1 ${titillium.className}`}>
            &nbsp;LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. 
            LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. 
            LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. LET'S WORK TOGHETHER. 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
