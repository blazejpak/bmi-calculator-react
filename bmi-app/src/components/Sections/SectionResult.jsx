import "./SectionResult.css";

import vectorLeft from "../../../assets/images/pattern-curved-line-left.svg";

const SectionResult = () => {
  return (
    <section className="container-result">
      <img src={vectorLeft} className="vector-line--left" />

      <div className="result-div--image">
        <img className="image" src="../../assets/image-man-eating.webp" />
      </div>
      <div className="div-text--result">
        <h2 className="heading-secondary--result">
          What your BMI result means
        </h2>
        <p className="text-result">
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy
          weight.&apos; Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and type 2
          diabetes. Aim for a nutritious diet with reduced fat and sugar
          content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily
          for five days a week.
        </p>
      </div>
    </section>
  );
};

export default SectionResult;
