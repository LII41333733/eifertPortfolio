import React from "react";

import { getImagesByPlatform } from "../utils";
import { MediaLoader } from "./hooks/MediaLoader";

const Page = ({ path, Component, isMobile }) => {
  const pageRef = React.useRef(null);

  const imagePath = getImagesByPlatform(isMobile);
  const { loading } = MediaLoader(pageRef);

  return (
    <div
      className={loading ? "loading-container" : "loaded-container"}
      ref={pageRef}
    >
      <Component isMobile={isMobile} imagePath={`${imagePath}${path}`} />
    </div>
  );
};

export default Page;
