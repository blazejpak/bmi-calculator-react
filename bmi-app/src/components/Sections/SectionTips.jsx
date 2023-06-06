import "./SectionTips.css";

import mealLogo from "../../assets/images/icon-eating.svg";
import excerciseLogo from "../../assets/images/icon-exercise.svg";
import sleepLogo from "../../assets/images/icon-sleep.svg";

const SectionTips = () => {
  return (
    <section className="section-tips">
      <div className="tip">
        <img src={mealLogo} className="tip-logo" />
        <div className="tip-div">
          <h2 className="heading-secondary--tip">Healthy eating</h2>
          <p className="tip-text">
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
      </div>
      <div className="tip">
        <img src={excerciseLogo} className="tip-logo" />
        <div className="tip-div">
          <h2 className="heading-secondary--tip">Regular exercise</h2>
          <p className="tip-text">
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>
      </div>
      <div className="tip">
        <img src={sleepLogo} className="tip-logo" />
        <div className="tip-div">
          <h2 className="heading-secondary--tip">Adequate sleep</h2>
          <p className="tip-text">
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTips;
