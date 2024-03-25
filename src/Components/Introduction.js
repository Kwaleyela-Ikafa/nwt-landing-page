import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import MilletGrowth from "../Assets/millet_growth.png";

const Introduction = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage}  width={"650px"}  alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-subheading">Introduction</h1>
        <p className="primary-text">
          Millet is a gluten-free grain that has gained some popularity in recent years due to its nutritional value and versatility.
          It is a common ingredient in various cuisines worldwide and is used in a variety of dishes such as porridge, pilaf, salads, and baked goods.
        </p>
        <p className="primary-text">
          In this report, we will delve into the market overview of millet in France, exploring its current status, consumption patterns, nutritional aspects,
          cultivation practices, and the factors driving its popularity. We will also examine the intercultural segmentation and buyer persona to gain insights
          into the target audience for millet-based products. By understanding the market dynamics and consumer preferences, we can identify strategic opportunities
          to promote millet, leverage social media engagement, and create a sense of community around millet-based products.
        </p>
          <img src={MilletGrowth} alt="" />
        <div className="about-buttons-container">
          <a
            className="secondary-button"
            href="https://www.mordorintelligence.com/fr/industry-reports/millets-market" target="_blank"
          >Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
