import React, { useState } from "react";
import Markle from "../views/markle/markle";
import Summer from "../views/summer/summer";
import Spring from "../views/spring/spring";
import Holiday from "../views/holiday/holiday";
import Vegas from "../views/vegas/vegas";
import Kay from "../views/kay/kay";
import Branded from "../views/branded/branded";
import Womenheart from "../views/womenheart/womenheart";
import Harlem from "../views/harlem/harlem";
import { getHomePageImage } from "../App";
import Desktop from "../Components/Desktop";
import Mobile from "../Components/Mobile";

const desktopImageTags = {
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

const mobileImageTags = {
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

const desktopTitles = {
  0: {
    a: "BRANDING",
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

const mobileTitles = {
  0: {
    a: "BRANDING",
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

export const HomeDesktop = ({ page, setPage, layer, setLayer, isMobile }) => {
  const imageTags = isMobile ? mobileImageTags : desktopImageTags;
  const titles = isMobile ? mobileTitles : desktopTitles;
  const urls = React.useMemo(
    () => [
      getHomePageImage(imageTags[layer].a, isMobile),
      getHomePageImage(imageTags[layer].b, isMobile),
      getHomePageImage(imageTags[layer].c, isMobile),
    ],
    [layer, isMobile]
  );

  const [loadedImages, setLoadedImages] = React.useState([]);

  React.useEffect(() => {
    const loadImages = async () => {
      console.log(urls);
      const promises = urls.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.alt = "";
          img.onload = () => resolve(url);
        });
      });

      const loaded = await Promise.all(promises);
      setLoadedImages(loaded);
    };

    loadImages();
  }, [urls, layer, isMobile]);

  return page === "home" ? (
    loadedImages.length !== urls.length ? (
      <></>
    ) : isMobile ? (
      <Mobile
        titles={titles}
        urls={urls}
        loadedImages={loadedImages}
        layer={layer}
        setLayer={setLayer}
        imageTags={imageTags}
        setPage={setPage}
      />
    ) : (
      <Desktop
        titles={titles}
        urls={urls}
        loadedImages={loadedImages}
        layer={layer}
        setLayer={setLayer}
        imageTags={imageTags}
        setPage={setPage}
      />
    )
  ) : (
    <RenderPage page={page} isMobile={isMobile} />
  );
};

// const RenderLoader = ({ page }) => {
//     const [loaded, setLoaded] = useState(false);
//     const [elementsLoaded, setElementsLoaded] = useState(0);
//   const containerRef = React.useRef(null);

//   React.useEffect(() => {
//     const images = containerRef.current.querySelectorAll("img");
//     const videos = containerRef.current.querySelectorAll("video");
//     const svg = containerRef.current.querySelectorAll("svg");
//     const totalElements = images.length + videos.length + svg.length;

//     if (elementsLoaded === totalElements) {
//       setLoaded(true);
//     }
//   }, [elementsLoaded]);

//   return (
//     <div ref={containerRef}>
//       <RenderPage page={page} />
//     </div>
//   );
// };

const RenderPage = ({ page, isMobile }) => {
  switch (page) {
    case "kay":
      return <Kay isMobile={isMobile} />;

    case "markle":
      return <Markle isMobile={isMobile} />;

    case "womenheart":
      return <Womenheart isMobile={isMobile} />;

    case "branded":
      return <Branded isMobile={isMobile} />;

    case "harlem":
      return <Harlem isMobile={isMobile} />;

    case "vegas":
      return <Vegas isMobile={isMobile} />;

    case "summer":
      return <Summer isMobile={isMobile} />;

    case "holiday":
      return <Holiday isMobile={isMobile} />;

    case "spring":
      return <Spring isMobile={isMobile} />;

    default:
      return <Kay isMobile={isMobile} />;
  }
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
//           src={`${desktopHomeImages}${desktopImageTags[layer].a}.png`}
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
//           src={`${desktopHomeImages}${desktopImageTags[layer].b}.png`}
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
//           src={`${desktopHomeImages}${desktopImageTags[layer].c}.png`}
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
