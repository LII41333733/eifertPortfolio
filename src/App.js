import React, { useState, useEffect } from "react";
import { HeaderDesktop } from "./Components";
import "./App.css";
import { HomeDesktop } from "./Pages/Home";
import { Contact, About } from "./Pages";

export const SOURCE = "http://www.eifertdesign.com";
export const SOURCE_IMAGES = `${SOURCE}/images`;
export const SOURCE_IMAGES_DESKTOP = `${SOURCE_IMAGES}/desktop`;
export const SOURCE_IMAGES_MOBILE = `${SOURCE_IMAGES}/mobile`;
export const SOURCE_VIDEOS_DESKTOP = `${SOURCE}/videos`;

export const getHomePageImage = (imageName, isMobile) => {
  if (isMobile) {
    return `../images/mobile/${imageName}.png`;
    // return `${SOURCE_IMAGES_MOBILE}/${imageName}.png`;
  }
  return `${SOURCE_IMAGES_DESKTOP}/${imageName}.png`;
};

function App() {
  useEffect(() => {
    document.title = "Eifert Design";
  }, []);

  const [layer, setLayer] = React.useState(0);
  const [page, setPage] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const isMobileDevice = window.innerWidth <= 760;
    setIsMobile(isMobileDevice);
  }, []);

  const isContact = page === "contact";
  const isAbout = page === "about";
  const isHome = !isContact && !isAbout;

  const setters = {
    isMobile,
    layer,
    page,
    getHomePageImage,
    setLayer,
    setPage,
  };

  console.log(isMobile);

  return (
    <div className="container">
      <div className="desktop">
        <HeaderDesktop {...setters} />
        {isHome && <HomeDesktop {...setters} />}
        {isContact && <Contact />}
        {isAbout && <About />}
      </div>
    </div>
  );
}

export default App;
