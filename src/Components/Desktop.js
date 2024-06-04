import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { convertIdToPage } from "../utils";

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

const titles = {
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
  // illustrations
  2: {
    a: "BURLINGTON BRANDED TV SPOTS",
    b: "HARLEM ILLUSTRATIONS",
    c: "BURLINGTON VEGAS CAMPAIGN",
  },
  // art direction
  3: {
    a: "BURLINGTON SUMMER CAMPAIGN",
    b: "BURLINGTON HOLIDAY CAMPAIGN",
    c: "BURLINGTON SPRING CAMPAIGN",
  },
};

const Desktop = ({
  urls,
  loadedImages,
  layer,
  setLayer,
  imageTags,
  setPage,
}) => {
  const navigate = useNavigate();
  return (
    <div id="desktop-body">
      <div id="left-column">
        <div
          id="zoneA"
          onClick={() => {
            navigate(`/${convertIdToPage(imageTags[layer].a)}`);
          }}
        >
          <img
            src={urls[0]}
            className={loadedImages.includes(urls[0]) ? "loaded" : ""}
            alt=""
          />
          <span style={{ width: spanWidth[layer].a || "initial" }}>
            {titles[layer].a}
          </span>
        </div>
        <div
          id="zoneB"
          onClick={() => {
            navigate(`/${convertIdToPage(imageTags[layer].b)}`);
          }}
        >
          <img
            src={urls[1]}
            className={loadedImages.includes(urls[1]) ? "loaded" : ""}
            alt=""
          />
          <span style={{ width: spanWidth[layer].b || "initial" }}>
            {titles[layer].b}
          </span>
        </div>
      </div>
      <div id="right-column">
        <div
          id="zoneC"
          onClick={() => {
            navigate(`/${convertIdToPage(imageTags[layer].c)}`);
          }}
        >
          <img
            src={urls[2]}
            className={loadedImages.includes(urls[2]) ? "loaded" : ""}
            alt=""
          />
          <span style={{ width: spanWidth[layer].c || "initial" }}>
            {titles[layer].c}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
