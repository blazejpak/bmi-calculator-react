import "./SectionLimitations.css";

import vectorRight from "../../assets/images/pattern-curved-line-right.svg";
import logoGender from "../../assets/images/icon-gender.svg";
import logoAge from "../../assets/images/icon-age.svg";
import logoMuscle from "../../assets/images/icon-muscle.svg";
import logoPregnancy from "../../assets/images/icon-pregnancy.svg";
import logoRace from "../../assets/images/icon-race.svg";

const SectionLimitations = () => {
  return (
    <section className="container-limitations">
      <img src={vectorRight} className="vector-right" />
      <div className="div-limitations">
        <h2 className="heading-secondary--limitations">Limitations of BMI</h2>
        <p className="text-limitations">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="div-limitations--gender div-limits">
        <div className="limitations-header">
          <img src={logoGender} />
          <h3 className="heading-third--limitations">Gender</h3>
        </div>
        <p className="text-limitations">
          The development and body fat composition of girls and boys vary with
          age. Consequently, a child's age and gender are considered when
          evaluating their BMI.
        </p>
      </div>

      <div className="div-limitations--age div-limits">
        <div className="limitations-header">
          <img src={logoAge} />
          <h3 className="heading-third--limitations">Age</h3>
        </div>
        <p className="text-limitations">
          In aging individuals, increased body fat and muscle loss may cause BMI
          to underestimate body fat content.
        </p>
      </div>

      <div className="div-limitations--muscle div-limits">
        <div className="limitations-header">
          <img src={logoMuscle} />
          <h3 className="heading-third--limitations">Muscle</h3>
        </div>
        <p className="text-limitations">
          BMI may misclassify muscular individuals as overweight or obese, as it
          doesn't differentiate muscle from fat.
        </p>
      </div>

      <div className="div-limitations--pregnancy div-limits">
        <div className="limitations-header">
          <img src={logoPregnancy} />
          <h3 className="heading-third--limitations">Pregnancy</h3>
        </div>
        <p className="text-limitations">
          Expectant mothers experience weight gain due to their growing baby.
          Maintaining a healthy pre-pregnancy BMI is advisable to minimise
          health risks for both mother and child.
        </p>
      </div>

      <div className="div-limitations--race div-limits">
        <div className="limitations-header">
          <img src={logoRace} />
          <h3 className="heading-third--limitations">Race</h3>
        </div>
        <p className="text-limitations">
          Certain health concerns may affect individuals of some Black and Asian
          origins at lower BMIs than others. To learn more, it is advised to
          discuss this with your GP or practice nurse.
        </p>
      </div>
    </section>
  );
};

export default SectionLimitations;
