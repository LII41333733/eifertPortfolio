import React, { useState } from "react";
import markle from "../views/markle/markle";
import summer from "../views/summer/summer";
import spring from "../views/spring/spring";
import holiday from "../views/holiday/holiday";
import vegas from "../views/vegas/vegas";
import kay from "../views/kay/kay";
import branded from "../views/branded/branded";
import womenheart from "../views/womenheart/womenheart";
import harlem from "../views/harlem/harlem";
import { getHomePageImage } from "../App";

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
    c: "womenheart",
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
    a: "BRAND IDENTITY",
    b: "ILLUSTRATIONS + MORE",
    c: "ART DIRECTION",
  },
  // case studies
  1: {
    a: "KAY CREATIONS",
    b: "MARKLE TRICK SHOTS",
    c: "WOMENHEART",
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
      return kay;

    case "markle":
      return markle;

    case "womenheart":
      return womenheart;

    case "branded":
      return branded;

    case "harlem":
      return harlem;

    case "vegas":
      return vegas;

    case "summer":
      return summer;

    case "holiday":
      return holiday;

    case "spring":
      return spring;

    default:
      return kay;
  }
};

export const HomeDesktop = ({ page, setPage, layer, setLayer }) => {
  return page === "home" ? (
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
          <img src={getHomePageImage(imageTags[layer].a, true)} alt="" />
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
          <img src={getHomePageImage(imageTags[layer].b, true)} alt="" />
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
          <img src={getHomePageImage(imageTags[layer].c, true)} alt="" />
          <span style={{ width: spanWidth[layer].c || "initial" }}>
            {titles[layer].c}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <RenderPage page={page} />
  );
};

// export const HomeMobile = ({ layer, setLayer }) => {
//   //   const [mobilePage, setMobilePage] = useState("");
//   const [fadeState, setFadeState] = useState("fade-in");
//   const [fadeTransition, setFadeTransition] = useState("null");
//   const [activeIndex, setActiveIndex] = useState(-1);
//   const FADE_DURATION = 1000;
//   const handleClick = (index) => {
//     if (index === activeIndex) {
//       // setLayer(index);
//       // window.scrollTo(0, 0);
//     } else {
//       const timeout = setTimeout(() => {
//         setFadeTransition(null);
//         //setFadeState("fade-in");
//       }, FADE_DURATION);
//       clearTimeout(fadeTransition);
//       setFadeState(`fade-out`);
//       setFadeTransition(timeout);
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <div className="mobile-img-div">
//       <div
//         id="zoneA"
//         className={`overlay-div ${1 === activeIndex && fadeState}`}
//         style={{ transitionDuration: `${FADE_DURATION}ms` }}
//         onClick={() => handleClick(1)}
//       >
//         <img
//           src={`${desktopHomeImages}${imageTags[layer].a}.png`}
//           alt=""
//           onClick={() => setLayer(1)}
//         />
//         <span style={{ width: spanWidth[layer].a || "initial" }}>
//           {titles[layer].a}
//         </span>
//       </div>
//       <div
//         id="zoneB"
//         className={`overlay-div ${2 === activeIndex && fadeState}`}
//         style={{ transitionDuration: `${FADE_DURATION}ms` }}
//         onClick={() => handleClick(1)}
//       >
//         <img
//           src={`${desktopHomeImages}${imageTags[layer].b}.png`}
//           alt=""
//           onClick={() => setLayer(2)}
//         />
//         <span style={{ width: spanWidth[layer].b || "initial" }}>
//           {titles[layer].b}
//         </span>
//       </div>
//       <div
//         id="zoneC"
//         className={`overlay-div ${3 === activeIndex && fadeState}`}
//         style={{ transitionDuration: `${FADE_DURATION}ms` }}
//         onClick={() => handleClick(1)}
//       >
//         <img
//           src={`${desktopHomeImages}${imageTags[layer].c}.png`}
//           alt=""
//           onClick={() => setLayer(3)}
//         />
//         <span style={{ width: spanWidth[layer].c || "initial" }}>
//           {titles[layer].c}
//         </span>
//       </div>
//       <div className="line"></div>
//     </div>
//   );
// };

export default { HomeDesktop };
