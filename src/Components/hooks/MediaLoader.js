import React, { useState, useEffect } from "react";

export const MediaLoader = (pageRef) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pageRef.current && loading) {
      const media = pageRef.current.querySelectorAll("img, svg, video");
      const allMedia = Array.from(media);

      const handleMediaLoad = () => {
        const allMediaLoaded = allMedia.every((media) => {
          return media.complete || media.readyState === 4;
        });

        if (allMediaLoaded) {
          setLoading(false);
        }
      };

      allMedia.forEach((e) => {
        e?.addEventListener("load", handleMediaLoad);
      });

      return () => {
        allMedia.forEach((e) => {
          e?.removeEventListener("load", handleMediaLoad);
        });
      };
    }
  }, [pageRef]);

  return { loading };
};
