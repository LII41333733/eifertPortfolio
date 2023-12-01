import React, { useState } from "react";
import { scrollPastHeader, pageArr } from "../Utilities";

export const HomeDesktop = ({ func }) => {
  return (
    <div id="desktop-body">
      <div id="left-column">
        <div id="zoneA"></div>
        <div id="zoneB"></div>
      </div>
      <div id="right-column">
        <div id="zoneC"></div>
      </div>
    </div>
  );
};

export const HomeMobile = ({ func }) => {
  const [mobilePage, setMobilePage] = useState("");
  const [fadeState, setFadeState] = useState("fade-in");
  const [fadeTransition, setFadeTransition] = useState("null");
  const [activeIndex, setActiveIndex] = useState(-1);
  const FADE_DURATION = 1000;
  const handleClick = (index) => {
    if (index === activeIndex) {
      func(mobilePage);
      window.scrollTo(0, 0);
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

  const mobileImgDivs = [];
  for (let i = 0; i < pageArr.length; i++) {
    const key = pageArr[i];
    const line =
      i === pageArr.length - 1 ? null : i % 2 === 0 ? (
        <div className="line-left-mobile"></div>
      ) : (
        <div className="line-right-mobile"></div>
      );

    mobileImgDivs.push(
      <>
        <div className="mobile-img-div">
          <div
            className={`overlay-div ${i === activeIndex && fadeState}`}
            style={{ transitionDuration: `${FADE_DURATION}ms` }}
            onClick={() => {
              handleClick(i);
            }}
          >
            <img
              data-page={key}
              className={`mobile-overlay`}
              src={`images/overlays/mobileOverlays/${pageArr[i]}.png`}
              onClick={(e) => setMobilePage(e.target.dataset.page)}
            />
          </div>
          <img
            className="mobile-img"
            src={
              key === "WomenHeart"
                ? `images/main/mobile/WomenHeart.png`
                : key === "Animations"
                ? "images/main/desktop/Animations.gif"
                : key === "Peace"
                ? `images/main/mobile/Peace.png`
                : `images/main/desktop/${key}.png`
            }
          />
        </div>
        {line}
      </>
    );
  }
  return mobileImgDivs;
};

export default { HomeDesktop, HomeMobile };
