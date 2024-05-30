import { titillium } from "./MainScreen";
import Translator from "./Translator";
import "./components.css";

const Marquee = () => {
  const text = "LET'S WORK TOGETHER ";
  return (
    <Translator>
      {(translations) => (
        <section className="bottom__carousel__section">
          <div class="marquee">
            <div class="track">
              <div
                class={`marquee__text__1 ${titillium.className}`}
                dangerouslySetInnerHTML={{ __html: translations.marqueetext1 }}
              ></div>
            </div>
          </div>
          <div class="marquee">
            <div class="track__2">
              <div
                class={`marquee__text__1 ${titillium.className}`}
                dangerouslySetInnerHTML={{ __html: translations.marqueetext1 }}
              ></div>
            </div>
          </div>
        </section>
      )}
    </Translator>
  );
};

export default Marquee;
