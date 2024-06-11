import React, { useState, useEffect, useRef } from "react";

export const MediaLoader = () => {
  const [loading, setLoading] = useState(true);

  const gifRef = useRef(null);
  const svgRef = useRef(null);

  const handleMediaLoad = () => {
    if (gifRef.current.complete && svgRef.current.complete) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (gifRef.current && svgRef.current) {
      gifRef.current?.addEventListener("load", handleMediaLoad);
      svgRef.current?.addEventListener("load", handleMediaLoad);

      return () => {
        gifRef.current?.removeEventListener("load", handleMediaLoad);
        svgRef.current?.removeEventListener("load", handleMediaLoad);
      };
    }
  }, [gifRef, svgRef]);

  return { loading, gifRef, svgRef };
};

// import { useState, useEffect } from "react";

// export const MediaLoader = (mediaCount) => {
//   const [loading, setLoading] = useState(true);
//   const [loadedCount, setLoadedCount] = useState(0);

//   const handleMediaLoad = () => {
//     console.log("ran");
//     setLoadedCount((prevCount) => prevCount + 1);
//   };

//   useEffect(() => {
//     console.log(`loaded: ` + loadedCount);
//     console.log(`media: ` + mediaCount);
//     if (loadedCount === mediaCount) {
//       setLoading(false);
//     }
//   }, [loadedCount, mediaCount]);

//   return {
//     loading,
//     handleMediaLoad,
//   };
// };
