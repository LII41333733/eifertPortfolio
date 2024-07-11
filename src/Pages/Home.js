import React from "react";
import Desktop from "../Components/Desktop";
import Mobile from "../Components/Mobile";
import { getImagesByPlatform } from "../utils";

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
  // illustrations
  2: {
    a: "branded",
    b: "harlem",
    c: "vegas",
  },
  // art direction
  3: {
    a: "summer",
    b: "holiday",
    c: "spring",
  },
};

const mobileImageTags = {
  0: {
    a: "art",
    b: "case",
    c: "illustrations",
  },
  // art direction
  1: {
    a: "summer",
    b: "holiday",
    c: "spring",
  },
  // case studies
  2: {
    a: "kay",
    b: "markle",
    c: "womenheart",
  },
  // illustrations
  3: {
    a: "branded",
    b: "harlem",
    c: "vegas",
  },
};

const HomeDesktop = ({
  page,
  setPage,
  layer,
  setLayer,
  isMobile,
  descriptionIndex,
  setDescriptionIndex,
  platform,
}) => {
  const imageTags = isMobile ? mobileImageTags : desktopImageTags;

  // const gif = !isMobile && (
  //   imageTags[layer].c === 'art' ||
  //   imageTags[layer].c === 'art' ||
  //   imageTags[layer].c === 'art' ||
  // );

  console.log(imageTags[layer].a);

  const urls = React.useMemo(
    () => [
      `${getImagesByPlatform(isMobile)}/home/${imageTags[layer].a}.${
        (isMobile && imageTags[layer].a === "art") ||
        imageTags[layer].a === "branded"
          ? "gif"
          : "png"
      }`,
      `${getImagesByPlatform(isMobile)}/home/${imageTags[layer].b}.${
        imageTags[layer].b === "markle" ? "gif" : "png"
      }`,
      `${getImagesByPlatform(isMobile)}/home/${imageTags[layer].c}.${
        !isMobile && imageTags[layer].c === "art" ? "gif" : "png"
      }`,
    ],
    [layer, imageTags, isMobile]
  );

  const [loadedImages, setLoadedImages] = React.useState([]);

  React.useEffect(() => {
    const loadImages = async () => {
      setLoadedImages([]);
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

  return loadedImages.length !== urls.length ? (
    <></>
  ) : isMobile ? (
    <Mobile
      urls={urls}
      loadedImages={loadedImages}
      layer={layer}
      setLayer={setLayer}
      imageTags={imageTags}
      setPage={setPage}
      descriptionIndex={descriptionIndex}
      setDescriptionIndex={setDescriptionIndex}
    />
  ) : (
    <Desktop
      urls={urls}
      loadedImages={loadedImages}
      layer={layer}
      setLayer={setLayer}
      imageTags={imageTags}
      setPage={setPage}
      descriptionIndex={descriptionIndex}
      setDescriptionIndex={setDescriptionIndex}
    />
  );
};

export default HomeDesktop;
