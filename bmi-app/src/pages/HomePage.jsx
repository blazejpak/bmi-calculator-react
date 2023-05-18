import React from "react";
import SectionHero from "../components/Sections/SectionHero";
import SectionResult from "../components/Sections/SectionResult";

import "./HomePage.css";
import SectionTips from "../components/Sections/SectionTips";
import SectionLimitations from "../components/Sections/SectionLimitations";

const HomePage = () => {
  return (
    <main className="sections">
      <SectionHero />
      <SectionResult />
      <SectionTips />
      <SectionLimitations />
    </main>
  );
};

export default HomePage;
