import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { convertIdToPage } from "../utils";

const spanWidth = {
  0: {
    a: "",
    b: "8.7rem",
    c: "8.7rem",
  },
  // art direction
  1: {
    a: "14rem",
    b: "14rem",
    c: "13rem",
  },
  // case studies
  2: {
    a: "",
    b: "",
    c: "",
  },
  // illustrations
  3: {
    a: "15rem",
    b: "15rem",
    c: "12rem",
  },
};

const titles = {
  0: {
    a: "ART DIRECTION",
    b: "BRANDING",
    c: "ILLUSTRATIONS + MORE",
  },
  // art direction
  1: {
    a: "BURLINGTON SUMMER CAMPAIGN",
    b: "BURLINGTON HOLIDAY CAMPAIGN",
    c: "BURLINGTON SPRING CAMPAIGN",
  },
  // case studies
  2: {
    a: "KAY CREATIONS",
    b: "MARKLE TRICK SHOTS",
    c: "WOMENHEART",
  },
  // illustrations
  3: {
    a: "BURLINGTON BRANDED TV SPOTS",
    b: "HARLEM ILLUSTRATIONS",
    c: "BURLINGTON VEGAS CAMPAIGN",
  },
};

const Mobile = ({
  urls,
  loadedImages,
  layer,
  setLayer,
  imageTags,
  setPage,
  descriptionIndex,
  setDescriptionIndex,
}) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setDescriptionIndex(-1);
  }, [layer]);

  return (
    <div id="mobile-body">
      <div
        id="zoneA"
        className="zone"
        onClick={() => {
          if (descriptionIndex !== 0) {
            setDescriptionIndex(0);
          } else {
            setDescriptionIndex(-1);
            navigate(`/${convertIdToPage(imageTags[layer].a)}`);
          }
        }}
      >
        <img
          src={urls[0]}
          className={`${loadedImages.includes(urls[0]) ? "loaded" : ""} ${
            descriptionIndex === 0 ? "show-description" : ""
          }`}
          alt=""
        />
        <span style={{ width: spanWidth[layer].a || "initial" }}>
          {titles[layer].a}
        </span>
      </div>
      <div
        id="zoneB"
        className="zone"
        onClick={() => {
          if (descriptionIndex !== 1) {
            setDescriptionIndex(1);
          } else {
            setDescriptionIndex(-1);
            navigate(`/${convertIdToPage(imageTags[layer].b)}`);
          }
        }}
      >
        <img
          src={urls[1]}
          className={`${loadedImages.includes(urls[1]) ? "loaded" : ""} ${
            descriptionIndex === 1 ? "show-description" : ""
          }`}
          alt=""
        />
        <span style={{ width: spanWidth[layer].b || "initial" }}>
          {titles[layer].b}
        </span>
      </div>
      <div
        id="zoneC"
        className="zone"
        onClick={() => {
          if (descriptionIndex !== 2) {
            setDescriptionIndex(2);
          } else {
            setDescriptionIndex(-1);
            navigate(`/${convertIdToPage(imageTags[layer].c)}`);
          }
        }}
      >
        <img
          src={urls[2]}
          className={`${loadedImages.includes(urls[2]) ? "loaded" : ""} ${
            descriptionIndex === 2 ? "show-description" : ""
          }`}
          alt=""
        />
        <span style={{ width: spanWidth[layer].c || "initial" }}>
          {titles[layer].c}
        </span>
      </div>
    </div>
  );
};

export default Mobile;
