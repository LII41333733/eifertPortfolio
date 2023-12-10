import React, { useState } from "react";
import { scrollPastHeader, pageArr } from "../Utilities";

const desktopHomeImages = "images/home/desktop/";
const mobileHomeImages = "images/home/mobile/";

const imageTags = {
  0: {
    a: "case",
    b: "illustrations",
    c: "art",
  },
  // case studies
  1: {
    a: "kay",
    b: "markle",
    c: "wed",
  },
  // art direction
  3: {
    a: "summer",
    b: "holiday",
    c: "spring",
  },
  // illustrations
  2: {
    a: "branded",
    b: "harlem",
    c: "vegas",
  },
};

const titles = {
  0: {
    a: "CASE STUDIES",
    b: "ILLUSTRATIONS + MORE",
    c: "ART DIRECTION",
  },
  // case studies
  1: {
    a: "KAY CREATIONS",
    b: "MARKLE TRICK SHOTS",
    c: "WED BY ED",
  },
  // art direction
  3: {
    a: "BURLINGTON SUMMER CAMPAIGN",
    b: "BURLINGTON HOLIDAY CAMPAIGN",
    c: "BURLINGTON SPRING CAMPAIGN",
  },
  // illustrations
  2: {
    a: "BURLINGTON BRANDED TV SPOTS",
    b: "HARLEM ILLUSTRATIONS",
    c: "BURLINGTON VEGAS CAMPAIGN",
  },
};

const spanWidth = {
  0: {
    a: "",
    b: "8.7rem",
    c: "",
  },
  // case studies
  1: {
    a: "",
    b: "",
    c: "",
  },
  // art direction
  3: {
    a: "14rem",
    b: "14rem",
    c: "13rem",
  },
  // illustrations
  2: {
    a: "15rem",
    b: "15rem",
    c: "12rem",
  },
};
export const HomeDesktop = ({ layer, setLayer }) => {
  return (
    <div id="desktop-body">
      <div id="left-column">
        <div id="zoneA" onClick={() => setLayer(1)}>
          <img src={`${desktopHomeImages}${imageTags[layer].a}.png`} alt="" />
          <span style={{ width: spanWidth[layer].a || "initial" }}>
            {titles[layer].a}
          </span>
        </div>
        <div id="zoneB" onClick={() => setLayer(2)}>
          <img src={`${desktopHomeImages}${imageTags[layer].b}.png`} alt="" />
          <span style={{ width: spanWidth[layer].b || "initial" }}>
            {titles[layer].b}
          </span>
        </div>
      </div>
      <div id="right-column">
        <div id="zoneC" onClick={() => setLayer(3)}>
          <img src={`${desktopHomeImages}${imageTags[layer].c}.png`} alt="" />
          <span style={{ width: spanWidth[layer].c || "initial" }}>
            {titles[layer].c}
          </span>
        </div>
      </div>
    </div>
  );
};

export const HomeMobile = ({ func, layer, setLayer }) => {
  //   const [mobilePage, setMobilePage] = useState("");
  const [fadeState, setFadeState] = useState("fade-in");
  const [fadeTransition, setFadeTransition] = useState("null");
  const [activeIndex, setActiveIndex] = useState(-1);
  const FADE_DURATION = 1000;
  const handleClick = (index) => {
    if (index === activeIndex) {
      // setLayer(index);
      // window.scrollTo(0, 0);
    } else {
      const timeout = setTimeout(() => {
        setFadeTransition(null);
        //setFadeState("fade-in");
      }, FADE_DURATION);
      clearTimeout(fadeTransition);
      setFadeState(`fade-out`);
      setFadeTransition(timeout);
      setActiveIndex(index);
    }
  };

  //  <div id="zoneA" onClick={() => setLayer(1)}>
  //         <img src={`${desktopHomeImages}${imageTags[layer].a}.png`} alt="" />
  //         <span style={{ width: spanWidth[layer].a || "initial" }}>
  //           {titles[layer].a}
  //         </span>
  //       </div>
  //       <div id="zoneB" onClick={() => setLayer(2)}>
  //         <img src={`${desktopHomeImages}${imageTags[layer].b}.png`} alt="" />
  //         <span style={{ width: spanWidth[layer].b || "initial" }}>
  //           {titles[layer].b}
  //         </span>
  //       </div>
  //     </div>
  //     <div id="right-column">
  //       <div id="zoneC" onClick={() => setLayer(3)}>
  //         <img src={`${desktopHomeImages}${imageTags[layer].c}.png`} alt="" />
  //         <span style={{ width: spanWidth[layer].c || "initial" }}>
  //           {titles[layer].c}
  //         </span>
  //       </div>
  //     </div>

  return (
    <div className="mobile-img-div">
      <div
        id="zoneA"
        className={`overlay-div ${1 === activeIndex && fadeState}`}
        style={{ transitionDuration: `${FADE_DURATION}ms` }}
        onClick={() => handleClick(1)}
      >
        <img
          src={`${desktopHomeImages}${imageTags[layer].a}.png`}
          alt=""
          onClick={() => setLayer(1)}
        />
        <span style={{ width: spanWidth[layer].a || "initial" }}>
          {titles[layer].a}
        </span>
      </div>
      <div
        id="zoneB"
        className={`overlay-div ${2 === activeIndex && fadeState}`}
        style={{ transitionDuration: `${FADE_DURATION}ms` }}
        onClick={() => handleClick(1)}
      >
        <img
          src={`${desktopHomeImages}${imageTags[layer].b}.png`}
          alt=""
          onClick={() => setLayer(2)}
        />
        <span style={{ width: spanWidth[layer].b || "initial" }}>
          {titles[layer].b}
        </span>
      </div>
      <div
        id="zoneC"
        className={`overlay-div ${3 === activeIndex && fadeState}`}
        style={{ transitionDuration: `${FADE_DURATION}ms` }}
        onClick={() => handleClick(1)}
      >
        <img
          src={`${desktopHomeImages}${imageTags[layer].c}.png`}
          alt=""
          onClick={() => setLayer(3)}
        />
        <span style={{ width: spanWidth[layer].c || "initial" }}>
          {titles[layer].c}
        </span>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default { HomeDesktop, HomeMobile };
