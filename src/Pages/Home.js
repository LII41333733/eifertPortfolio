import React, { useState } from "react";
import markle from "../views/markle/markle";
import summer from "../views/summer/summer";
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

const RenderPage = ({ page }) => {
  switch (page) {
    case "kay":
      return <></>;

    case "markle":
      return markle;

    case "wed":
      return <></>;

    case "branded":
      return <></>;

    case "harlem":
      return <></>;

    case "vegas":
      return <></>;

    case "summer":
      return summer;

    case "holiday":
      return <></>;

    case "spring":
      return <></>;
  }
};

export const HomeDesktop = ({ layer, setLayer }) => {
  console.log(layer);
  console.log(imageTags[layer].a);
  console.log(imageTags[layer].b);
  console.log(imageTags[layer].c);

  const [page, setPage] = React.useState("");

  return page ? (
    <RenderPage page={page} />
  ) : (
    <div id="desktop-body">
      <div id="left-column">
        <div
          id="zoneA"
          onClick={() => {
            if (layer === 0) {
              setLayer(1);
            } else {
              setPage(imageTags[layer].a);
            }
          }}
        >
          <img src={`${desktopHomeImages}${imageTags[layer].a}.png`} alt="" />
          <span style={{ width: spanWidth[layer].a || "initial" }}>
            {titles[layer].a}
          </span>
        </div>
        <div
          id="zoneB"
          onClick={() => {
            if (layer === 0) {
              setLayer(2);
            } else {
              setPage(imageTags[layer].b);
            }
          }}
        >
          <img src={`${desktopHomeImages}${imageTags[layer].b}.png`} alt="" />
          <span style={{ width: spanWidth[layer].b || "initial" }}>
            {titles[layer].b}
          </span>
        </div>
      </div>
      <div id="right-column">
        <div
          id="zoneC"
          onClick={() => {
            if (layer === 0) {
              setLayer(3);
            } else {
              setPage(imageTags[layer].c);
            }
          }}
        >
          <img src={`${desktopHomeImages}${imageTags[layer].c}.png`} alt="" />
          <span style={{ width: spanWidth[layer].c || "initial" }}>
            {titles[layer].c}
          </span>
        </div>
      </div>
    </div>
  );
};

export const HomeMobile = ({ layer, setLayer }) => {
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
