import { useState, useEffect } from "react";

const useLoadTracker = (elements) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (elements.length === 0) {
      setLoaded(true);
      return;
    }

    const handleLoad = () => {
      setLoaded((prevState) => {
        const newLoadedState = elements.map(
          (e) => e.complete || (e.tagName === "VIDEO" && e.readyState >= 3)
        );
        return newLoadedState.every(Boolean);
      });
    };

    elements.forEach((element) => {
      if (element.tagName === "IMG" || element.tagName === "VIDEO") {
        element.addEventListener("load", handleLoad);
        element.addEventListener("loadeddata", handleLoad);

        if (
          element.complete ||
          (element.tagName === "VIDEO" && element.readyState >= 3)
        ) {
          handleLoad();
        }
      }
    });

    // Cleanup listeners on unmount
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("load", handleLoad);
        element.removeEventListener("loadeddata", handleLoad);
      });
    };
  }, [elements]);

  return loaded;
};

export default useLoadTracker;
