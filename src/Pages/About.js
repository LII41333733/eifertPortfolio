import React from "react";
import { getImagesByPlatform } from "../utils";

const About = ({ isMobile }) => {
  return (
    <img
      id="about-page"
      src={`${getImagesByPlatform(isMobile)}/about.svg`}
      alt="about"
    />
  );
};

export default About;
